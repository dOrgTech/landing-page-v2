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
    highlightColor: 'url(/imgs/project-backgrounds/the-graph.png) repeat top left, #0C0A1D',
    iconHighlightColor: '#6f4cff',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(35%) sepia(51%) saturate(6120%) hue-rotate(241deg) brightness(100%) contrast(104%)',
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
    icon: 'imgs/logos/gnosis-logo-color.svg',
    highlightColor: '#e8e7e6',
    colorIcon: true,
    textColor: '#001428',
    textColorFilter: 'brightness(0) saturate(100%) invert(6%) sepia(31%) saturate(5034%) hue-rotate(192deg) brightness(97%) contrast(102%)',
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
    iconHighlightColor: '#5500FC',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(13%) sepia(99%) saturate(5303%) hue-rotate(263deg) brightness(86%) contrast(135%)',
    highlightColor: 'linear-gradient(3.2deg, #040E14 19.19%, #061824 88.66%)',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Compound: {
    name:'Compound',
    link: 'https://compound.finance/',
    icon: 'imgs/logos/Compound.svg',
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
    iconHighlightColor: '#515fcb',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(19%) sepia(94%) saturate(2659%) hue-rotate(231deg) brightness(84%) contrast(83%)',
    highlightColor: '#102039',
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
    icon: 'imgs/logos/minds-logo-color.svg',
    iconHighlightColor: '#ffd740',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(72%) sepia(95%) saturate(334%) hue-rotate(355deg) brightness(102%) contrast(101%)',
    highlightColor: '#FFF',
    colorIcon: true,
    textColor: '#43434d',
    textColorFilter: 'brightness(0) saturate(100%) invert(22%) sepia(15%) saturate(438%) hue-rotate(202deg) brightness(97%) contrast(85%)',
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
    iconHighlightColor: '#09afdf',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(58%) sepia(82%) saturate(2727%) hue-rotate(156deg) brightness(96%) contrast(93%)',
    highlightColor: '#fff',
    textColor: '#333333',
    textColorFilter: 'brightness(0) saturate(100%) invert(13%) sepia(0%) saturate(0%) hue-rotate(237deg) brightness(101%) contrast(82%)',
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
    iconHighlightColor: '#0e0e0e',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(0%) sepia(21%) saturate(141%) hue-rotate(355deg) brightness(104%) contrast(89%)',
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
    highlightColor: '#6aac0e',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  }
}