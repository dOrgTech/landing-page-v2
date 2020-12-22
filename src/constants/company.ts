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
    name: 'TheGraph',
    link: 'https://thegraph.com',
    icon: 'imgs/maskgroup1.svg'
  },
  Gnosis: {
    name: 'Gnosis',
    link: 'Full Transparency',
    icon: 'imgs/Component 20 – 2.svg'
  },
  Balancer: {
    name:'Balancer',
    link: 'Never Stop Learning',
    icon: 'imgs/Component 21 – 2.svg'
  },
  DeversiFi: {
    name:'Deversifi',
    link: 'Never Stop Learning',
    icon: 'imgs/Component 21 – 2.svg'
  }, Compound: {
    name:'Compound',
    link: 'Never Stop Learning',
    icon: 'imgs/Component 21 – 2.svg'
  },
  Stakedus: {
    name:'Staked.us',
    link: 'Never Stop Learning',
    icon: 'imgs/Component 21 – 2.svg'
  },
  Minds: {
    name:'Minds',
    link: 'Never Stop Learning',
    icon: 'imgs/Component 21 – 2.svg'
  },
  ParaSwap: {
    name:'ParaSwap',
    link: 'Never Stop Learning',
    icon: 'imgs/Component 21 – 2.svg'
  },
  Boardroom: {
    name:'Boardroom',
    link: 'Never Stop Learning',
    icon: 'imgs/Component 21 – 2.svg'
  },
  Centrality: {
    name:'Centrality',
    link: 'Freedom & Peer Support',
    icon: 'imgs/Component 22 – 2.svg'
  },
  eToro: {
    name:'eToro',
    link: 'Freedom & Peer Support',
    icon: 'imgs/Component 22 – 2.svg'
  }
}