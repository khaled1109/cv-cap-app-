const { createApp } = Vue;

createApp({
  data() {
    return {
      cv: {},
      experiences: [],
      education: [],
      skills: [],
      groupedSkills: {}
    };
  },
  async mounted() {
    try {
      // Profil laden
      const profileResponse = await axios.get('/odata/v4/cv/Profiles');
      this.cv = profileResponse.data.value[0];

      // Berufserfahrung laden und sortieren (neueste zuerst)
      const experienceResponse = await axios.get('/odata/v4/cv/Experience');
      this.experiences = experienceResponse.data.value.sort((a, b) =>
        new Date(b.start) - new Date(a.start)
      );

      // Ausbildung laden
      const educationResponse = await axios.get('/odata/v4/cv/Education');
      this.education = educationResponse.data.value;

      // Skills laden und gruppieren
      const skillsResponse = await axios.get('/odata/v4/cv/Skills');
      this.skills = skillsResponse.data.value;

      this.groupedSkills = this.skills.reduce((acc, skill) => {
        const category = skill.category || 'Sonstige';
        if (!acc[category]) acc[category] = [];
        acc[category].push(skill);
        return acc;
      }, {});
    } catch (error) {
      console.error("Fehler beim Laden:", error);
    }
  },
  methods: {
    getCategoryClass(category) {
      const map = {
        'Frontend-Technologien': 'skill-frontend',
        'Backend-Technologien': 'skill-backend',
        'Datenbanken': 'skill-db',
        'Cloud & DevOps': 'skill-devops',
        'Tools & Frameworks': 'skill-tools',
        'Soft Skills': 'skill-soft'
      };
      return map[category] || 'skill-default';
    }
  }
}).mount('#app');
