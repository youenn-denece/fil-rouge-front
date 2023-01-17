export interface Formation {
  id: number;
  name: string;
  overview: string;
  categoryID: number;
}

export const formations = [
  {
    id: 1,
    name: 'Java',
    overview: 'Basic Java skills for web apps',
    categoryID: 1,
  },
  {
    id: 2,
    name: 'R',
    overview: 'Learn statistics and make nice plots',
    categoryID: 1,
  },
  {
    id: 3,
    name: 'angular',
    overview: 'Learn dynamic web pages',
    categoryID: 2,
  },
  {
    id: 4,
    name: 'Python',
    overview: 'Machine learning with python',
    categoryID: 1,
  },
  {
    id: 5,
    name: 'HTML/CSS',
    overview: 'Make nice web pages',
    categoryID: 1,
  },
  {
    id: 2,
    name: 'PHP',
    overview: 'Basic PHP skills for web apps',
    categoryID: 1,
  },
  {
    id: 7,
    name: 'Cobolt',
    overview: 'Want to work with old school banks ?',
    categoryID: 1,
  },
  {
    id: 8,
    name: 'C++',
    overview: 'Basic C++ skills for bioinformatic purpose',
    categoryID: 1,
  },
  {
    id: 9,
    name: 'spring',
    overview: 'backend logic and api posts',
    categoryID: 2,
  },
  {
    id: 10,
    name: 'sql worbench',
    overview: 'visual tool for database managing',
    categoryID: 3,
  },
  {
    id: 11,
    name: 'CRUD',
    overview: 'basic understanding of databases',
    categoryID: 3,
  },
  {
    id: 12,
    name: 'hibernate',
    overview: 'Data persistence presentation',
    categoryID: 2,
  },
  {
    id: 13,
    name: 'PHP my Admin',
    overview: 'database gestion with wamp',
    categoryID: 3,
  },
  {
    id: 14,
    name: 'Spring security',
    overview: 'Basic tools for password protection and base webpage security',
    categoryID: 4,
  },
  {
    id: 15,
    name: 'Malware',
    overview: 'Overview of most common malware on the web',
    categoryID: 4,
  },
  {
    id: 16,
    name: 'Vulnerability',
    overview: 'Most dnagerous vulnerability on your web pages',
    categoryID: 4,
  },
  {
    id: 17,
    name: 'Networks',
    overview: 'Introduction to web most common newtorks',
    categoryID: 5,
  },
];
