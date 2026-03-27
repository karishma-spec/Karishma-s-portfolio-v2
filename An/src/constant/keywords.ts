const names = [
  "Karishma Bishnoi",
  "Karishma Bishnoi Portfolio",
  "Karishma Bishnoi AIT Pune",
  "Karishma Bishnoi Pune",
];

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Web Developer",
  "C++ Developer",
  "Competitive Programmer",
  "UI/UX Designer",
  "Student Developer",
  "Creative Developer"
];

const skills = [
  // Core & Languages
  "C++",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Data Structures and Algorithms",
  
  // Design & Prototyping
  "Figma",
  "Canva",
  "UI/UX Prototyping",
  "Web Design",

  // Niche & Domain
  "Competitive Programming",
  "Codeforces",
  "IoT",
  "Smart Systems",
  "Git & GitHub"
];

const projects = [
  "Smart Irrigation System IoT",
  "NEXT NICHE Event Design",
  "CODEFT Poster",
  "IPL Auction Platform",
  "Student Portfolio Website"
];

const locations = [
  "India",
  "Pune",
  "Maharashtra",
  "AIT Pune",
  "Remote"
];

const longTail = [
  "Hire C++ Developer in Pune",
  "Best Student Developer Portfolio",
  "Competitive Programmer Portfolio",
  "SheFi Scholar Portfolio",
  "UI/UX Designer Student",
  "Smart Irrigation IoT Project",
  "Frontend Developer with Design skills",
  "Freelance Web Developer Pune"
];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...longTail,

  ...roles.flatMap((role) => locations.map((loc) => `${role} in ${loc}`)),
  ...skills.map((skill) => `${skill} Developer`),
  ...skills.map((skill) => `${skill} Expert`),
  ...skills.map((skill) => `Hire ${skill} Developer`),
];
