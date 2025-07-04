namespace my.cv;

entity Profiles {
  key ID       : Integer;
      fullName : String;
      jobTitle : String;
      summary  : String;
      email    : String;
      phone    : String;
      location : String;
      linkedin : String;
      github   : String;
}
entity Experience {
  key ID      : UUID;
  title       : String;
  company     : String;
  location    : String;
  start       : Date;
  end         : Date;
  description : String;  
}

entity Education {
  key ID          : UUID;
  degree          : String;
  institution     : String;
  location        : String;
  country         : String;
  start           : Date;
  end             : Date;
  graduated       : Boolean;
  grade           : String;
  thesis          : String;
  details         : String;
}
entity Skills {
  key ID       : UUID;
      category : String;
      skill    : String;
}