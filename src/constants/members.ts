
export interface Member {
  name: string;
  skills: string[];
  photo?: string;
  portfolio: {
    github?: string;
    website?: string;
    linkedin?: string;
  }
}

export async function getMembers(): Promise<Member[] | undefined> {
  const response = await fetch('/api/members');
  if (!response.ok) {
    return undefined;
  }
  const jsonString = await response.json() as string;
  return await JSON.parse(jsonString) as Member[];
}

const testMember: Member = {
  name: 'Christopher Walken',
  photo: 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg',
  skills: ['Smart Contracts', 'Backend', 'DevOps', 'Speech Cadence', 'TypeScript', 'React', 'Solidity'],
  portfolio: {
    github: 'https://github.com/dOrgTech',
    website: 'https://www.imdb.com'
  }
}

const testMembers: Member[] = [];
for (let i = 0; i < 25; i++) {
  const index = i % 20;
  testMembers.push(Object.assign({}, testMember, {name: `Christopher Walken ${index}`}));
}

export {testMembers}