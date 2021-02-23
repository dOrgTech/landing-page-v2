import {Client} from "./clients";

export interface Communities {
  API3: Readonly<Client>;
  Aragon: Readonly<Client>;
  Badger: Readonly<Client>;
  DAOstack: Readonly<Client>;
  Dxdao: Readonly<Client>;
  Tezos: Readonly<Client>;
  Web3API: Readonly<Client>;
  Zer0: Readonly<Client>;
}

export const communities: Communities = {
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
      description: 'API3 provides dApps with decentrally governed and quantifiably secure data feeds.\n\nThe API3 team enlisted dOrg to help build the API3 DAO, a custom Aragon DAO that will allow anyone to stake API3 tokens in order to receive staking rewards and voting power. Complete with its own staking modules and custom UI, the API3 DAO will govern what may be the future of API services on Web3.',
      technologies: ['Smart Contracts', 'Software Architecture', 'Frontend'],
      bullets: [
        {text: 'Check out the repo', url: 'https://github.com/api3dao/api3-dao'}
      ],
      imageSrc: 'imgs/logos/api3.svg',
    }
  },
  Aragon: {
    name: 'Aragon',
    link: 'https://aragon.org/',
    icon: 'imgs/logos/Aragon.svg',
    iconHighlightColor: '#00c2ff',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(59%) sepia(33%) saturate(5904%) hue-rotate(164deg) brightness(108%) contrast(106%)',
    highlightColor: '#ffffff',
    textColor: '#333333',
    textColorFilter: 'brightness(0) saturate(100%) invert(26%) sepia(0%) saturate(31%) hue-rotate(140deg) brightness(96%) contrast(119%)',
    project: {
      description: 'Aragon is a leading framework for decentralized governance.\n\ndOrg coordinates within the Aragon ecosystem to handle important UX enhancements and new features in core libraries. We also lead product research and development of the upcoming V2 Client.\n\ndOrg is one of the most active teams in the Aragon Experts program. We have developed custom Aragon components for DAOs such as API3, RAY, and LID.',
      technologies: ['Smart Contracts', 'Web3 Integrations', 'Product Owner'],
      bullets: [],
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
      description: 'The Badger is a DAO dedicated to bringing Bitcoin to DeFi.\n\ndOrg provides development support to the Badger community by improving its product suite (Sett, Digg) and surrounding infrastructure (merkle trees, geysers, keepers, oracles).',
      technologies: ['Smart Contracts', 'Web3 Integrations', 'Frontend'],
      bullets: [],
      imageSrc: 'imgs/project-graphics/badger-logo.png'
    }
  },
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
      description: 'DAOstack is an operating system for scalable governance.\n\ndOrg has worked as a development catalyst for the DAOstack ecosystem since our earliest days. In addition to contributing to each layer of the stack, we\'ve built out and maintained key components including Arc.react, Arc.js, and the DAO launcher. We’ve also helped integrate external use-cases such as the Nectar DAO, Dxdao, and GoodDollar.',
      technologies: ['Web3 Integrations', 'Smart Contracts', 'Frontend', 'UI/UX Design', 'Developer Tools', 'Software Architecture'],
      bullets: [
        {text: 'Watch the DAOstack OS Ecosystem presentation', url: 'https://www.youtube.com/watch?v=XBjy4oj61JE'},
        {text: 'Watch the Arc.React demo', url: 'https://www.youtube.com/watch?v=d0Zx4Z-EObE'},
        {text: 'Read the DAO Launcher blog post', url: 'https://medium.com/bitfwd/how-to-create-run-your-own-dao-5e3eadd96962'}
      ],
      imageSrc: 'imgs/project-graphics/daostack-logo-black.svg',
    }
  },
  Dxdao: {
    name:'Dxdao',
    link: 'https://dxdao.eth.link/#/',
    icon: 'imgs/logos/DxDao.svg',
    iconHighlightColor: '#651fff',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(12%) sepia(95%) saturate(5348%) hue-rotate(260deg) brightness(106%) contrast(107%)',
    highlightColor: '#ffffff',
    textColor: '#333333',
    textColorFilter: 'brightness(0) saturate(100%) invert(26%) sepia(0%) saturate(31%) hue-rotate(140deg) brightness(96%) contrast(119%)',
    project: {
      description: 'At the time of inception, Dxdao was one of the boldest experiments to date in distributed governance. It’s mission: to develop and govern a suite of truly trustless DeFi components.\n\nIn the DAO’s early stages dOrg provided expertise on DAOstack integrations and security. We also developed a custom UI and integration with the Fairmint CSO contracts.',
      technologies: ['Web3 Integrations', 'Frontend', 'UI/UX Design'],
      bullets: [
        {text: 'Check out the app', url: 'https://dxtrust.eth.link/#/'},
        {text: 'Read the blog post', url: 'https://medium.com/bitfwd/distributed-capital-formation-with-openraise-3af9a601ad63'}
      ],
      imageSrc: 'imgs/project-graphics/dxdao-blue.svg',
    }
  },
  Tezos: {
    name:'Tezos',
    link: 'https://tezos.com/',
    icon: 'imgs/logos/tezos-logo-blue.png',
    colorIcon: true,
    highlightColor: '#ffffff',
    iconHighlightColor: '#2C7DF7',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(38%) sepia(57%) saturate(3760%) hue-rotate(206deg) brightness(103%) contrast(94%)',
    textColor: '#123262',
    textColorFilter: 'brightness(0) saturate(100%) invert(14%) sepia(15%) saturate(7037%) hue-rotate(199deg) brightness(97%) contrast(94%)',
    project: {
      description: 'dOrg is proud to be working with TQ Tezos and the broader Tezos ecosystem on Homebase, an app that enables anyone to launch DAOs on the Tezos blockchain in a few clicks.\n\ndOrg designed and built the Homebase app on top of the BaseDAO smart contract framework We utilized Taquito and Beacon SDK. We also contributed to the BaseDAO framework spec and design as product co-owners.',
      technologies: ['Web3 Integrations', 'Frontend', 'UI/UX Design'],
      bullets: [
        {text: 'Read the announcement', url: 'https://tqtezos.medium.com/daos-on-tezos-announcing-homebase-80bbecbb9bfe'},
        {text: 'Check out the repo', url: 'https://github.com/dOrgTech/homebase-app'}
      ],
      imageSrc: 'imgs/logos/tezos-logo-blue.png'
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
      description: 'Web3API is an integration standard that makes it easy to interact with any blockchain from any programming language. The project is stewarded by the Web3API DAO, a tokenized alliance of protocol partners, financial backers, and builder teams.\n\ndOrg provides the DAO with continuous product development and operational support services. On the product side, we are currently focused on the alpha release of the client, IDE, and developer docs. For operations, we help with content creation, partner onboarding, and strategy.',
      technologies: ['Developer Tools', 'Software Architecture', 'Governance Design'],
      bullets: [
        {text: 'Watch a technical walkthrough from ETH Denver 2021', url: 'https://www.youtube.com/watch?v=9HhB4XL4AR4'},
        {text: 'Read the announcement', url: 'https://web3api.substack.com/p/developer-toolchain-web3api-successfully'}
      ],
      // imageSrc: 'imgs/project-graphics/web3api-graphic.svg'
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
      description: 'Zero is a Social Operating System that has been building in stealth for 6 years. The Zero OS enables peer-to-peer communication, collaboration, transactions, and governance.\n\ndOrg works with teams across the Zero ecosystem to architect and implement critical components of the Zero stack like the Zero Name Service (ZNS) and zDAO.',
      technologies: ['Smart Contracts', 'Frontend', 'Software Architecture'],
      bullets: [],
      imageSrc: 'imgs/project-graphics/zero-eye-graphic.png'
    }
  },
}