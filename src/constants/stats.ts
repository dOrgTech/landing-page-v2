export interface Stat {
  title: string;
  stat: string;
  icon: string;
}

export interface Stats {
  projects: Readonly<Stat>;
  tvl: Readonly<Stat>;
  clients: Readonly<Stat>;
  builders: Readonly<Stat>;
  lifetime: Readonly<Stat>;
  raised: Readonly<Stat>;
}

export const stats: Stats = {
  projects: {
    title: 'PROJECTS SHIPPED',
    stat: '25',
    icon: 'imgs/Component 9 – 2.svg'
  },
  tvl: {
    title: 'TVL IN OUR PRODUCTS',
    stat: '$200M+',
    icon: 'imgs/Component 10 – 2.svg'
  },
  clients: {
    title: 'CLIENT SATISFACTION',
    stat: '98%',
    icon: 'imgs/Component 11 – 2.svg'
  },
  builders: {
    title: 'ACTIVE BUILDERS',
    stat: '30',
    icon: 'imgs/Component 12 – 2.svg'
  },
  lifetime: {
    title: 'MONTHS TOGETHER',
    stat: '18',
    icon: 'imgs/Component 13 – 2.svg'
  },
  raised: {
    title: 'FUNDING RAISED',
    stat: '$0',
    icon: 'imgs/Component 14 – 2.svg'
  }
}
