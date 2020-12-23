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
    icon: 'imgs/bracketed-dot-icon.svg'
  },
  tvl: {
    title: 'TVL IN OUR PRODUCTS',
    stat: '$200M+',
    icon: 'imgs/circle-slice-icon.svg'
  },
  clients: {
    title: 'CLIENT SATISFACTION',
    stat: '98%',
    icon: 'imgs/smiley-face-icon.svg'
  },
  builders: {
    title: 'ACTIVE BUILDERS',
    stat: '30',
    icon: 'imgs/people-icon.svg'
  },
  lifetime: {
    title: 'MONTHS TOGETHER',
    stat: '18',
    icon: 'imgs/calendar-icon.svg'
  },
  raised: {
    title: 'FUNDING RAISED',
    stat: '$0',
    icon: 'imgs/dollar-sign-icon.svg'
  }
}
