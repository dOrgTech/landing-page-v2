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
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: [],
    }
  },
  Gnosis: {
    name: 'Gnosis',
    link: 'Full Transparency',
    icon: 'imgs/logos/Gnosis.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Balancer: {
    name:'Balancer',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Balancer.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  DeversiFi: {
    name:'DeversiFi',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Deversifi.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  }, Compound: {
    name:'Compound',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Compound.svg',
    iconHighlightFilter: '',
    highlightColor: '#00a977',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Stakedus: {
    name:'Staked.us',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/StakedUs.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Minds: {
    name:'Minds',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Minds.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  ParaSwap: {
    name:'ParaSwap',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/ParaSwap.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Boardroom: {
    name:'Boardroom',
    link: 'Never Stop Learning',
    icon: 'imgs/logos/Boardroom.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Centrality: {
    name:'Centrality',
    link: 'Freedom & Peer Support',
    icon: 'imgs/logos/Centrality.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  eToro: {
    name:'eToro',
    link: 'Freedom & Peer Support',
    icon: 'imgs/logos/eToro.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  }
}