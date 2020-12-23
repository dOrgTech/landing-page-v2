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
    icon: 'imgs/maskgroup1.svg'
  },
  Aragon: {
    name: 'Aragon',
    link: '',
    icon: 'imgs/Component 20 – 2.svg'
  },
  Dxdao: {
    name:'Dxdao',
    link: '',
    icon: 'imgs/Component 21 – 2.svg'
  },
  Prime: {
    name:'Prime',
    link: '',
    icon: 'imgs/Component 21 – 2.svg'
  },
  Badger: {
    name:'Badger',
    link: '',
    icon: 'imgs/Component 21 – 2.svg'
  },
  API3: {
    name:'API3',
    link: '',
    icon: 'imgs/Component 21 – 2.svg'
  },
  LID: {
    name:'LID',
    link: '',
    icon: 'imgs/Component 21 – 2.svg'
  },
  Web3API: {
    name:'Web3API',
    link: '',
    icon: 'imgs/Component 21 – 2.svg'
  }
  
}