import {Client} from "./clients";

export interface Communities {
  DAOstack: Readonly<Client>;
  Aragon: Readonly<Client>;
  Dxdao: Readonly<Client>;
  Prime: Readonly<Client>;
  Badger: Readonly<Client>;
  API3: Readonly<Client>;
  LID: Readonly<Client>;
  Web3API: Readonly<Client>;
}

export const communities: Communities = {
  DAOstack: {
    name: 'DAOstack',
    link: 'https://daostack.io/',
    icon: 'imgs/logos/DaoStack.svg',
    iconHighlightFilter: '',
    highlightColor: '#00b4d6',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Aragon: {
    name: 'Aragon',
    link: 'https://aragon.org/',
    icon: 'imgs/logos/Aragon.svg',
    iconHighlightFilter: '',
    highlightColor: '#484ecc',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Dxdao: {
    name:'Dxdao',
    link: 'https://dxdao.eth.link/#/',
    icon: 'imgs/logos/DxDao.svg',
    iconHighlightFilter: '',
    highlightColor: '#651fff',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Prime: {
    name:'Prime',
    link: 'https://primedao.eth.link/#/',
    icon: 'imgs/logos/Prime.svg',
    iconHighlightFilter: '',
    highlightColor: '#ff495b',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Badger: {
    name:'Badger',
    link: 'https://badger.finance/',
    icon: 'imgs/logos/Badger.svg',
    iconHighlightFilter: '',
    highlightColor: '#F2A52B',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  API3: {
    name:'API3',
    link: 'https://www.api3.org/',
    icon: 'imgs/logos/api3.svg',
    iconHighlightFilter: '',
    highlightColor: '#000',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  LID: {
    name:'LID',
    link: 'https://github.com/Lid-Protocol',
    icon: 'imgs/logos/LID.svg',
    iconHighlightFilter: '',
    highlightColor: '#246B8F',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Web3API: {
    name:'Web3API',
    link: 'https://web3api.dev/#/',
    icon: 'imgs/logos/web3api_icon_color.png',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(56%) sepia(56%) saturate(365%) hue-rotate(143deg) brightness(91%) contrast(83%)',
    highlightColor: '#60c093',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  }
}