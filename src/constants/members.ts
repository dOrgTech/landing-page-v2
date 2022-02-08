
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


const placeholderMember: Member = {
  name: 'dOrg Builder',
  photo: 'imgs/logos/dorg-logo-stacked.svg',
  skills: ['Smart Contracts', 'Frontend', 'Backend', 'Design', 'UX', 'DevOps', 'Security', 'Tokenomics'],
  portfolio: {
    github: 'https://github.com/dOrgTech',
    website: 'https://dorg.tech/'
  }
}

const placeholderMembers: Member[] = [];
for (let i = 0; i < 6; i++) {
  placeholderMembers.push(Object.assign({}, placeholderMember, {name: `dOrg Builder`}));
}

export {placeholderMembers}