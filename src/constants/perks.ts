
export interface Perk {
    detail: string;
    perk: string;
    icon: string;
}

export interface Perks {
  remote: Readonly<Perk>;
  airdrop: Readonly<Perk>;
  commission: Readonly<Perk>;
  launchpad: Readonly<Perk>;
  benefits: Readonly<Perk>;
}

export const perks: Perks = {
  remote: {
    detail: 'Work from anywhere, anytime with a global team.',
    perk: '100% Remote',
    icon: '🏖️'
  },
  airdrop: {
    detail: 'Receive airdrops in proportion to your share of reputation.',
    perk: 'Token Airdrops',
    icon: '☔️'
  },
  commission: {
    detail: 'Earn commissions by referring your friends or sourcing new projects.',
    perk: 'Commissions',
    icon: '💸'
  },
  launchpad: {
    detail: 'Leverage shared resources to launch your own projects.',
    perk: 'Project Launchpad',
    icon: '🚀'
  },
  benefits: {
    detail: 'Enjoy group benefits like discounted tax prep, apparel and more!',
    perk: 'Group Benefits',
    icon: '🎡'
  },
}
