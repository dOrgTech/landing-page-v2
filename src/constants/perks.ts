export interface Perk {
    detail: string;
    perk: string;
    icon: string;
}

export interface Perks {
    ownWorkplace: Readonly<Perk>;
    transparency: Readonly<Perk>;
    learning: Readonly<Perk>;
    freedomSupport: Readonly<Perk>;
}

export const perks: Perks = {
  ownWorkplace: {
    detail: 'Accumulate DAO governance stake with every crypto dollar you earn.',
    perk: 'Own Your Workplace',
    icon: 'imgs/Component 19 – 2.svg'
  },
  transparency: {
    detail: 'No bosses. Every builder has the same level of access to all information.',
    perk: 'Full Transparency',
    icon: 'imgs/Component 20 – 2.svg'
  },
  learning: {
    detail: 'Work on projects at the bleeding edge of Web3 with high profile clients.',
    perk: 'Never Stop Learning',
    icon: 'imgs/Component 21 – 2.svg'
  },
  freedomSupport: {
    detail: 'Learn from talented peers without sacrificing the flexibilities of freelancing.',
    perk: 'Freedom & Peer Support',
    icon: 'imgs/Component 22 – 2.svg'
  }
}
