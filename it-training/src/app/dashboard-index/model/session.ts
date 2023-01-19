export interface ISession {
  id: string;
  startDate: string;
  endDate: string;
  price: number;
  studentNumber: number;
  maxStudentNumber: number;
  courseName: string;
  categoryName: string;
  campusName: string;
  campusCity: string;
  classroomNumber?: number | null;
  teacherName?: string | null;
}

export const sess : ISession = {
  id: '1',
  startDate: '2023-05-12',
  endDate: '2023-05-22',
  price: 2500.50,
  studentNumber: 12,
  maxStudentNumber: 25,
  courseName: 'Java',
  categoryName: 'Langage',
  campusName: 'Campus rose',
  campusCity: 'Toulouse',
  classroomNumber: 1,
  teacherName: 'Xavier Bourget',
};

export const sessions : ISession[] = [
  {
    id: '2',
    startDate: '2023-04-14',
    endDate: '2023-04-20',
    price: 2500.50,
    studentNumber: 19,
    maxStudentNumber: 25,
    courseName: 'PHP',
    categoryName: 'Langage',
    campusName: 'Campus rose',
    campusCity: 'Toulouse',
    classroomNumber: 1,
    teacherName: 'Xavier Bourget',
  },
  {
    id: '3',
    startDate: '2023-03-06',
    endDate: '2023-03-10',
    price: 2500.50,
    studentNumber: 12,
    maxStudentNumber: 18,
    courseName: 'TCP/IP',
    categoryName: 'Réseaux',
    campusName: 'Campus rose',
    campusCity: 'Toulouse',
  },
];
