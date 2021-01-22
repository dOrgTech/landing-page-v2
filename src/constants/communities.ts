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
    icon: 'imgs/logos/DaoStack.svg'
  },
  Aragon: {
    name: 'Aragon',
    link: '',
    icon: 'imgs/logos/Aragon.svg'
  },
  Dxdao: {
    name:'Dxdao',
    link: '',
    icon: 'imgs/logos/DxDao.svg'
  },
  Prime: {
    name:'Prime',
    link: '',
    icon: 'imgs/logos/Prime.svg'
  },
  Badger: {
    name:'Badger',
    link: '',
    icon: 'imgs/logos/Badger.svg'
  },
  API3: {
    name:'API3',
    link: '',
    icon: 'imgs/logos/api3.svg'
  },
  LID: {
    name:'LID',
    link: '',
    icon: 'imgs/logos/LID.svg'
  },
  Web3API: {
    name:'Web3API',
    link: '',
    icon: 'imgs/logos/web3api_icon_color.png'
  }
}