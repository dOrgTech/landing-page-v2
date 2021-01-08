export interface Member {
  name: string;
  photo: string;
  specializations: string[];
  technologies: string[];
  portfolio: string[];
}

export const testMember: Member = {
  name: 'Christopher Walken',
  photo: 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg',
  specializations: ['Smart Contracts', 'Backend', 'DevOps', 'Speech Cadence'],
  technologies: ['TypeScript', 'React', 'Solidity'],
  portfolio: ['https://github.com/dOrgTech']
}
