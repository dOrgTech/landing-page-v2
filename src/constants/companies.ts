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
    highlightColor: '#2548bf',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(73%) sepia(70%) saturate(3996%) hue-rotate(144deg) brightness(98%) contrast(97%)',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: [],
    }
  },
  Gnosis: {
    name: 'Gnosis',
    link: 'https://gnosis.io/',
    icon: 'imgs/logos/Gnosis.svg',
    iconHighlightFilter: '',
    highlightColor: '#009CB4',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Balancer: {
    name:'Balancer',
    link: 'https://balancer.finance/',
    icon: 'imgs/logos/Balancer.svg',
    iconHighlightFilter: '',
    highlightColor: '#41476b',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  DeversiFi: {
    name:'DeversiFi',
    link: 'https://www.deversifi.com/',
    icon: 'imgs/logos/Deversifi.svg',
    iconHighlightFilter: '',
    highlightColor: '#5500FC',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  }, Compound: {
    name:'Compound',
    link: 'https://compound.finance/',
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
    link: 'https://staked.us/',
    icon: 'imgs/logos/StakedUs.svg',
    iconHighlightFilter: '',
    highlightColor: '#3746bc',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Minds: {
    name:'Minds',
    link: 'https://www.minds.com/',
    icon: 'imgs/logos/Minds.svg',
    iconHighlightFilter: '',
    highlightColor: '#dbab09',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  ParaSwap: {
    name:'ParaSwap',
    link: 'https://paraswap.io/#/',
    icon: 'imgs/logos/ParaSwap.svg',
    iconHighlightFilter: '',
    highlightColor: '#005ede',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Boardroom: {
    name:'Boardroom',
    link: 'http://boardroom.to/',
    icon: 'imgs/logos/Boardroom.svg',
    iconHighlightFilter: '',
    highlightColor: '#E47C03',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Centrality: {
    name:'Centrality',
    link: 'https://centrality.ai/',
    icon: 'imgs/logos/Centrality.svg',
    iconHighlightFilter: '',
    highlightColor: '#1130ff',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  eToro: {
    name:'eToro',
    link: 'https://www.etoro.com/',
    icon: 'imgs/logos/eToro.svg',
    iconHighlightFilter: '',
    highlightColor: '#6CAC2F',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  }
}