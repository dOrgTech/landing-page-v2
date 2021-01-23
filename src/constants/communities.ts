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
    highlightColor: '#2548bf'
  },
  Aragon: {
    name: 'Aragon',
    link: '',
    icon: 'imgs/logos/Aragon.svg',
    iconHighlightFilter: '',
    highlightColor: '#484ecc'
  },
  Dxdao: {
    name:'Dxdao',
    link: '',
    icon: 'imgs/logos/DxDao.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  Prime: {
    name:'Prime',
    link: '',
    icon: 'imgs/logos/Prime.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  Badger: {
    name:'Badger',
    link: '',
    icon: 'imgs/logos/Badger.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  API3: {
    name:'API3',
    link: '',
    icon: 'imgs/logos/api3.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  LID: {
    name:'LID',
    link: '',
    icon: 'imgs/logos/LID.svg',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  },
  Web3API: {
    name:'Web3API',
    link: '',
    icon: 'imgs/logos/web3api_icon_color.png',
    iconHighlightFilter: '',
    highlightColor: '#2548bf'
  }
}