export interface Community {
    name: string;
    link: string;
    icon: string;
}

export interface Communities {
    DAOstack: Readonly<Community>;
    Aragon: Readonly<Community>;
    Dxdao: Readonly<Community>;
    Prime: Readonly<Community>;
    Badger: Readonly<Community>;
    API3: Readonly<Community>;
    LID: Readonly<Community>;
    Web3API: Readonly<Community>;





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
    icon: 'imgs/logos/Web3api.png'
  }
  
}