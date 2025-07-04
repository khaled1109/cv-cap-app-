using { my.cv as cv } from '../db/schema';

service CvService {
  entity Profiles    as projection on cv.Profiles;
  entity Experience  as projection on cv.Experience;
  entity Education   as projection on cv.Education;
  entity Skills      as projection on cv.Skills;
}
