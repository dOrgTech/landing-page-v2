import {Client} from "./clients";

export interface Communities {
  DAOstack: Readonly<Client>;
  Aragon: Readonly<Client>;
  Dxdao: Readonly<Client>;
  Badger: Readonly<Client>;
  API3: Readonly<Client>;
  Web3API: Readonly<Client>;
  Zer0: Readonly<Client>;
  Sovryn: Readonly<Client>;
}

export const communities: Communities = {
  DAOstack: {
    name: 'DAOstack',
    link: 'https://daostack.io/',
    icon: 'imgs/logos/DaoStack.svg',
    highlightColor: '#f8f9fa',
    iconHighlightColor: '#00b4d6',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(51%) sepia(99%) saturate(1864%) hue-rotate(152deg) brightness(96%) contrast(101%)',
    textColor: '#2e2e2e',
    textColorFilter: 'brightness(0) saturate(100%) invert(14%) sepia(0%) saturate(455%) hue-rotate(195deg) brightness(91%) contrast(86%)',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
      imageSrc: 'imgs/project-graphics/daostack-logo-black.svg',
    }
  },
  Aragon: {
    name: 'Aragon',
    link: 'https://aragon.org/',
    icon: 'imgs/logos/Aragon.svg',
    iconHighlightColor: '#00c2ff',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(59%) sepia(33%) saturate(5904%) hue-rotate(164deg) brightness(108%) contrast(106%)',
    highlightColor: '#fff',
    textColor: '#333333',
    textColorFilter: 'brightness(0) saturate(100%) invert(26%) sepia(0%) saturate(31%) hue-rotate(140deg) brightness(96%) contrast(119%)',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
      imageSrc: 'imgs/project-graphics/aragon-brand.svg'
    }
  },
  Badger: {
    name:'Badger',
    link: 'https://badger.finance/',
    icon: 'imgs/logos/Badger.svg',
    iconHighlightColor: '#F2A52B',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(84%) sepia(11%) saturate(4929%) hue-rotate(333deg) brightness(95%) contrast(100%)',
    highlightColor: '#181818',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
      imageSrc: 'imgs/project-graphics/badger-logo.png'
    }
  },
  Dxdao: {
    name:'Dxdao',
    link: 'https://dxdao.eth.link/#/',
    icon: 'imgs/logos/DxDao.svg',
    iconHighlightColor: '#651fff',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(12%) sepia(95%) saturate(5348%) hue-rotate(260deg) brightness(106%) contrast(107%)',
    highlightColor: '#fff',
    textColor: '#333333',
    textColorFilter: 'brightness(0) saturate(100%) invert(26%) sepia(0%) saturate(31%) hue-rotate(140deg) brightness(96%) contrast(119%)',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
      imageSrc: 'imgs/project-graphics/dxdao-blue.svg',
    }
  },
  API3: {
    name:'API3',
    link: 'https://www.api3.org/',
    icon: 'imgs/logos/api3.svg',
    colorIcon: true,
    iconHighlightColor: '#7CE3CB',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(80%) sepia(57%) saturate(295%) hue-rotate(108deg) brightness(96%) contrast(87%)',
    highlightColor: '#030303',
    textColor: '#F3F3F3',
    textColorFilter: 'brightness(0) saturate(100%) invert(98%) sepia(79%) saturate(774%) hue-rotate(191deg) brightness(123%) contrast(91%)',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
      imageSrc: 'imgs/logos/api3.svg',
    }
  },
  Web3API: {
    name:'Web3API',
    link: 'https://web3api.dev/#/',
    icon: 'imgs/logos/web3api_icon_color.png',
    colorIcon: true,
    iconHighlightColor: '#60c093',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(66%) sepia(37%) saturate(459%) hue-rotate(100deg) brightness(96%) contrast(88%)',
    highlightColor: '#1C272D',
    textColor: '#529dad',
    textColorFilter: 'brightness(0) saturate(100%) invert(55%) sepia(32%) saturate(544%) hue-rotate(143deg) brightness(95%) contrast(92%)',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
      imageSrc: 'imgs/project-graphics/web3api-graphic.svg'
    }
  },
  Zer0: {
    name:'Zer0',
    link: 'https://zer0.io/',
    icon: 'imgs/logos/zero-logo-white.png',
    colorIcon: true,
    highlightColor: 'linear-gradient(0deg,#d60e48,#000000)',
    homeTitleBackground: 'linear-gradient(0deg,#200300,#000000)',
    iconHighlightColor: '#006aff',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(33%) sepia(67%) saturate(5938%) hue-rotate(208deg) brightness(101%) contrast(109%)',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
      imageSrc: 'imgs/project-graphics/zero-eye-graphic.png'
    }
  },
  Sovryn: {
    name:'Sovryn',
    link: 'https://sovryn.app/',
    icon: 'imgs/logos/sovryn.svg',
    highlightColor: '#fff',
    iconHighlightColor: '#fdc009',
    iconHighlightFilter: 'brightness(0) saturate(100%)',
    textColor: '#000',
    textColorFilter: 'brightness(0) saturate(100%)',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
      imageSrc: 'imgs/project-graphics/sovryn-beach-coins.svg'
    }
  },
  // Prime: {
  //   name:'Prime',
  //   link: 'https://primedao.eth.link/#/',
  //   icon: 'imgs/logos/Prime.svg',
  //   iconHighlightColor: '#8668fc',
  //   iconHighlightFilter: 'brightness(0) saturate(100%) invert(47%) sepia(97%) saturate(3829%) hue-rotate(231deg) brightness(105%) contrast(97%)',
  //   highlightColor: '#ff6975',
  //   project: {
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
  //       '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
  //     technologies: ['React', 'GraphQL', 'Solidity'],
  //     bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
  //     imageSrc: 'imgs/logos/Prime.svg'
  //   }
  // },
  // LID: {
  //   name:'LID',
  //   link: 'https://github.com/Lid-Protocol',
  //   icon: 'imgs/logos/LID.svg',
  //   iconHighlightColor: '#fff',
  //   iconHighlightFilter: '',
  //   highlightColor: '#246B8F',
  //   project: {
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
  //       '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
  //     technologies: ['React', 'GraphQL', 'Solidity'],
  //     bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
  //   }
  // },
}