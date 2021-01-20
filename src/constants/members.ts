export interface Member {
  name: string;
  photo: string;
  title: string;
  bio: string;
  specializations: string[];
  technologies: string[];
  github: string;
  website: string;
}

const testMember: Member = {
  name: 'Christopher Walken',
  photo: 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg',
  title: 'Actor',
  bio: 'Christopher Walken is an American actor, singer, comedian, director, producer, screenwriter, and dancer, who has appeared in more than 100 films and television programs.',
  specializations: ['Smart Contracts', 'Backend', 'DevOps', 'Speech Cadence'],
  technologies: ['TypeScript', 'React', 'Solidity'],
  github: 'https://github.com/dOrgTech',
  website: 'https://www.imdb.com/name/nm0000686/'
}

const testMembers: Member[] = [];
for (let i = 0; i < 25; i++) {
  const index = i % 20;
  testMembers.push(Object.assign({}, testMember, {name: `Christopher Walken ${index}`}));
}

export {testMembers}