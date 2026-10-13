/**
 * Results data transcribed directly from the school's supplied
 * "Our Shining Stars" poster (Class 8 and Class 5 board exam results).
 *
 * IMPORTANT
 * - These values are reproduced from the poster supplied by the school.
 *   They have not been cross-checked against an official marks register.
 * - Publishing a minor's name and photograph requires written permission
 *   from the parent/guardian. Until that is obtained, the site shows the
 *   poster artwork and aggregate figures, not individual child portraits.
 */

export type StudentResult = {
  name: string;
  percentage: number;
};

export type ResultGroup = {
  id: string;
  classLabel: string;
  title: string;
  summary: string;
  students: StudentResult[];
};

const class8: StudentResult[] = [
  { name: "Khushi Patidar", percentage: 84 },
  { name: "Mahi Patidar", percentage: 84 },
  { name: "Harsh Jat", percentage: 83 },
  { name: "Nirali Mori", percentage: 81 },
  { name: "Vanshika Patidar", percentage: 78 },
  { name: "Payal", percentage: 69 },
  { name: "Jitendra Damar", percentage: 68 },
];

const class5: StudentResult[] = [
  { name: "Keshav Kotwal", percentage: 88 },
  { name: "Vedant Patidar", percentage: 84 },
  { name: "Surya Damar", percentage: 83 },
  { name: "Abhi Yadav", percentage: 82 },
  { name: "Mayank Patidar", percentage: 82 },
  { name: "Aanand Damar", percentage: 79 },
  { name: "Madav Parmar", percentage: 78 },
  { name: "Jatin Sirvi", percentage: 78 },
  { name: "Vanshika Nayma", percentage: 76 },
  { name: "Vikas Damar", percentage: 76 },
  { name: "Vanshika Patidar", percentage: 75 },
  { name: "Sidhi Sirvi", percentage: 75 },
  { name: "Raju Gamad", percentage: 73 },
  { name: "Virat Choudhary", percentage: 73 },
  { name: "Priyanashi Patidar", percentage: 70 },
  { name: "Sakshi Sirvi", percentage: 70 },
  { name: "Sunil Dindore", percentage: 68 },
];

export const resultGroups: ResultGroup[] = [
  {
    id: "class-8",
    classLabel: "Class 8",
    title: "Class 8 Board Exam Results",
    summary:
      "The Class 8 board examination cohort recorded on the school's 'Our Shining Stars' poster for the current session.",
    students: class8,
  },
  {
    id: "class-5",
    classLabel: "Class 5",
    title: "Class 5 Board Exam Results",
    summary:
      "The Class 5 board examination cohort recorded on the school's 'Our Shining Stars' poster for the current session.",
    students: class5,
  },
];

/** Small, honest statistics computed from the poster data only. */
export function groupStats(students: StudentResult[]) {
  const total = students.length;
  const percentages = students.map((s) => s.percentage);
  const sum = percentages.reduce((a, b) => a + b, 0);
  const average = Math.round((sum / total) * 10) / 10;
  const highest = Math.max(...percentages);
  const highestScorers = students.filter((s) => s.percentage === highest).map((s) => s.name);
  return { total, average, highest, highestScorers };
}

export const class8Stats = groupStats(class8);
export const class5Stats = groupStats(class5);

/**
 * Individual student identity is withheld from the public website until the
 * school confirms written parental consent. The names below exist so the
 * school's office can verify them against the original poster.
 */
export const PUBLICATION_NOTICE =
  "Student names and individual percentages are reproduced here from the school-supplied poster for verification. Names, photographs and individual results of minors are published only after written consent from parents/guardians is recorded by the school office.";