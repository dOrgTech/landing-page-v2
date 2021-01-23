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
    icon: 'imgs/logos/TheGraph.svg',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(73%) sepia(70%) saturate(3996%) hue-rotate(144deg) brightness(98%) contrast(97%)',
    highlightColor: '#2548bf'
  },
  Gnosis: {
    name: 'Gnosis',
    link: 'Full Transparency',
    icon: 'imgs/logos/Gnosis.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  Balancer: {
    name:'Balancer',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Balancer.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  DeversiFi: {
    name:'Deversifi',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Deversifi.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  }, Compound: {
    name:'Compound',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Compound.svg',
    iconHighlightFilter: '',
    highlightColor: '#00a977'
  },
  Stakedus: {
    name:'Staked.us',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/StakedUs.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  Minds: {
    name:'Minds',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Minds.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  ParaSwap: {
    name:'ParaSwap',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/ParaSwap.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  Boardroom: {
    name:'Boardroom',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Boardroom.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  Centrality: {
    name:'Centrality',
    link: 'Freedom & Peer Support',
    icon: 'imgs/logos/Centrality.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  eToro: {
    name:'eToro',
    link: 'Freedom & Peer Support',
    icon: 'imgs/logos/eToro.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  }
}