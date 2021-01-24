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
    link: '',
    icon: 'imgs/logos/DaoStack.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Aragon: {
    name: 'Aragon',
    link: '',
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
    link: '',
    icon: 'imgs/logos/DxDao.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Prime: {
    name:'Prime',
    link: '',
    icon: 'imgs/logos/Prime.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Badger: {
    name:'Badger',
    link: '',
    icon: 'imgs/logos/Badger.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  API3: {
    name:'API3',
    link: '',
    icon: 'imgs/logos/api3.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  LID: {
    name:'LID',
    link: '',
    icon: 'imgs/logos/LID.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf',
    project: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus sapien eget ante accumsan, sed ultricies enim congue. In aliquet risus consequat magna malesuada vulputate. \n' +
        '\nSed et gravida justo, at sodales nulla. Nulla euismod et massa a rhoncus. Praesent a dapibus sapien. Quisque lacinia dui eu ',
      technologies: ['React', 'GraphQL', 'Solidity'],
      bullets: ['Community-built interfaces integrating the protocol', 'The most secure protocol for money', 'Backed by World-class investors'],
    }
  },
  Web3API: {
    name:'Web3API',
    link: '',
    icon: 'imgs/logos/web3api_icon_color.png',
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