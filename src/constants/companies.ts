import {Client} from "./clients";

export interface Companies {
  TheGraph: Readonly<Client>;
  Gnosis: Readonly<Client>;
  Balancer: Readonly<Client>;
  DeversiFi: Readonly<Client>;
  Compound: Readonly<Client>;
  Stakedus: Readonly<Client>;
  Minds: Readonly<Client>;
  ParaSwap: Readonly<Client>;
  Boardroom: Readonly<Client>;
  Centrality: Readonly<Client>;
  eToro: Readonly<Client>;
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