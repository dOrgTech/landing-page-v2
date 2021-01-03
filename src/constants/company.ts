export interface Company {
    name: string;
    link: string;
    icon: string;
}

export interface Companies {
    TheGraph: Readonly<Company>;
    Gnosis: Readonly<Company>;
    Balancer: Readonly<Company>;
    DeversiFi: Readonly<Company>;
    Compound: Readonly<Company>;
    Stakedus: Readonly<Company>;
    Minds: Readonly<Company>;
    ParaSwap: Readonly<Company>;
    Boardroom: Readonly<Company>;
    Centrality: Readonly<Company>;
    eToro: Readonly<Company>;





}

export const companies: Companies = {
  TheGraph: {
    name: 'The Graph',
    link: 'https://thegraph.com',
    icon: 'imgs/logos/TheGraph.svg'
  },
  Gnosis: {
    name: 'Gnosis',
    link: 'Full Transparency',
    icon: 'imgs/logos/Gnosis.svg'
  },
  Balancer: {
    name:'Balancer',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Balancer.svg'
  },
  DeversiFi: {
    name:'Deversifi',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Deversifi.svg'
  }, Compound: {
    name:'Compound',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Compound.svg'
  },
  Stakedus: {
    name:'Staked.us',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/StakedUs.svg'
  },
  Minds: {
    name:'Minds',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Minds.svg'
  },
  ParaSwap: {
    name:'ParaSwap',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/ParaSwap.svg'
  },
  Boardroom: {
    name:'Boardroom',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Boardroom.svg'
  },
  Centrality: {
    name:'Centrality',
    link: 'Freedom & Peer Support',
    icon: 'imgs/logos/Centrality.svg'
  },
  eToro: {
    name:'eToro',
    link: 'Freedom & Peer Support',
    icon: 'imgs/logos/eToro.svg'
  }
}