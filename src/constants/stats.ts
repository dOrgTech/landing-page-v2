export interface Stat {
  title: string;
  stat: number;
  icon: string;
  currency?: boolean;
  postfix?: string;
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
    stat: 25,
    icon: 'imgs/bracketed-dot-icon.svg'
  },
  tvl: {
    title: 'TVL IN OUR PRODUCTS',
    stat: 2,
    currency: true,
    postfix: 'B+',
    icon: 'imgs/circle-slice-icon.svg'
  },
  clients: {
    title: 'CLIENT SATISFACTION',
    stat: 98,
    postfix: '%',
    icon: 'imgs/smiley-face-icon.svg'
  },
  builders: {
    title: 'ACTIVE BUILDERS',
    stat: 47,
    icon: 'imgs/people-icon.svg'
  },
  lifetime: {
    title: 'MONTHS TOGETHER',
    stat: 24,
    icon: 'imgs/calendar-icon.svg'
  },
  raised: {
    title: 'FUNDING RAISED',
    stat: 0,
    currency: true,
    icon: 'imgs/dollar-sign-icon.svg'
  }
}

export const statsMobile: Stats = {
  projects: {
    title: 'Projects shipped',
    stat: 25,
    icon: 'imgs/bracketed-dot-icon.svg'
  },
  tvl: {
    title: 'TVL in our products',
    stat: 999,
    currency: true,
    postfix: 'M+',
    icon: 'imgs/circle-slice-icon.svg'
  },
  clients: {
    title: 'Client satisfaction',
    stat: 98,
    postfix: '%',
    icon: 'imgs/smiley-face-icon.svg'
  },
  builders: {
    title: 'Active builders',
    stat: 30,
    icon: 'imgs/people-icon.svg'
  },
  lifetime: {
    title: 'Months together',
    stat: 18,
    icon: 'imgs/calendar-icon.svg'
  },
  raised: {
    title: 'Funding raised',
    stat: 0,
    currency: true,
    icon: 'imgs/dollar-sign-icon.svg'
  }
}