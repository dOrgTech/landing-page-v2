import {getMonthsTogether} from "../utils/statUtils";

export interface Stat {
  title: string;
  stat: number;
  icon: string;
  formatter?: Intl.NumberFormat
  postfix?: string;
}

export interface Stats {
  projects: Readonly<Stat>;
  tvl: Readonly<Stat>;
  clients: Readonly<Stat>;
  builders: Readonly<Stat>;
  lifetime: Readonly<Stat>;
  revenue: Readonly<Stat>;
}

const tvlFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export const stats: Stats = {
  projects: {
    title: 'PROJECTS SHIPPED',
    stat: 40,
    postfix: '+',
    icon: 'imgs/bracketed-dot-icon.svg'
  },
  tvl: {
    title: 'TVL IN SHIPPED PRODUCTS',
    stat: 2.5,
    formatter: tvlFormatter,
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
    stat: 35,
    icon: 'imgs/people-icon.svg'
  },
  lifetime: {
    title: 'MONTHS TOGETHER',
    stat: getMonthsTogether(new Date()),
    icon: 'imgs/calendar-icon.svg'
  },
  revenue: {
    title: 'ON-CHAIN REVENUE',
    stat: 1.5,
    formatter: tvlFormatter,
    postfix: 'M+',
    icon: 'imgs/dollar-sign-icon.svg'
  }
}

export const statsMobile: Stats = {
  projects: {
    title: 'Projects shipped',
    stat: 40,
    postfix: '+',
    icon: 'imgs/bracketed-dot-icon.svg'
  },
  tvl: {
    title: 'TVL in shipped products',
    stat: 2.5,
    formatter: tvlFormatter,
    postfix: 'B+',
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
    stat: 35,
    icon: 'imgs/people-icon.svg'
  },
  lifetime: {
    title: 'Months together',
    stat: getMonthsTogether(new Date()),
    icon: 'imgs/calendar-icon.svg'
  },
  revenue: {
    title: 'On-chain revenue',
    stat: 1.5,
    formatter: tvlFormatter,
    postfix: 'M+',
    icon: 'imgs/dollar-sign-icon.svg'
  }
}
