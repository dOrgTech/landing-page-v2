import {Client} from "./clients";

export interface Communities {
  Aragon: Readonly<Client>;
  Badger: Readonly<Client>;
  DAOstack: Readonly<Client>;
  Dxdao: Readonly<Client>;
  Gnosis: Readonly<Client>;
  Minds: Readonly<Client>;
  Near: Readonly<Client>;
  Rarible: Readonly<Client>;
  Tezos: Readonly<Client>;
  Polywrap: Readonly<Client>;
}

export const communities: Communities = {
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
      description: 'Badger is a DAO dedicated to bringing Bitcoin to DeFi.\n\ndOrg provides development support to the Badger community by improving its product suite (Sett, Digg, Claws) and surrounding infrastructure (merkle trees, geysers, keepers, oracles).',
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
      description: 'DAOstack is an operating system for scalable governance.\n\ndOrg has contributed to various layers of the DAOstack ecosystem, including Arc.react, Arc.js, and the DAO launcher. We’ve also helped integrate external use-cases such as Dxdao and Nectar DAO.',
      technologies: ['Web3 Integrations', 'Developer Tools', 'Software Architecture'],
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
      description: 'Dxdao develops and governs a suite of truly trustless DeFi components.\n\ndOrg provided expertise on DAOstack integrations and security. We also developed a custom UI and integration with the Fairmint CSO contracts.',
      technologies: ['Web3 Integrations', 'Frontend', 'UI/UX Design'],
      bullets: [
        {text: 'Check out the app', url: 'https://dxtrust.eth.link/#/'},
        {text: 'Read the blog post', url: 'https://medium.com/bitfwd/distributed-capital-formation-with-openraise-3af9a601ad63'}
      ],
      imageSrc: 'imgs/project-graphics/dxdao-blue.svg',
    }
  },
  Gnosis: {
    name: 'Gnosis Safe',
    link: 'gnosis-safe.io',
    icon: 'imgs/logos/gnosis-safe.png',
    highlightColor: '#e8e7e6',
    colorIcon: true,
    textColor: '#001428',
    textColorFilter: 'brightness(0) saturate(100%) invert(6%) sepia(31%) saturate(5034%) hue-rotate(192deg) brightness(97%) contrast(102%)',
    project: {
      description: 'Gnosis Safe is the most trusted platform for managing digital assets on Ethereum.\n\ndOrg is helping to build the SafeSnap app, which enables cheap yet secure governance through on-chain execution of off-chain votes.',
      technologies: ['Frontend', 'Web3 Integrations', 'Software Architecture'],
      bullets: [
        {text: 'Read the blog post', url: 'https://blog.gnosis.pm/introducing-safesnap-the-first-in-a-decentralized-governance-tool-suite-for-the-gnosis-safe-ea67eb95c34f'},
      ],
      imageSrc: 'imgs/logos/gnosis-logo-color.svg',
    }
  },
  Minds: {
    name:'Minds',
    link: 'https://www.minds.com/',
    icon: 'imgs/logos/minds-logo-color.svg',
    iconHighlightColor: '#ffd740',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(72%) sepia(95%) saturate(334%) hue-rotate(355deg) brightness(102%) contrast(101%)',
    highlightColor: '#FFFFFF',
    colorIcon: true,
    textColor: '#43434d',
    textColorFilter: 'brightness(0) saturate(100%) invert(22%) sepia(15%) saturate(438%) hue-rotate(202deg) brightness(97%) contrast(85%)',
    project: {
      description: 'Minds is a crypto social network with over 4 million users.\n\nThe Minds team hired dOrg to modernize the platform’s web3 architecture. This included updating to ethers.js, adding native Uniswap support, and Wallet Connect multi-wallet support on both web and mobile. dOrg also helped redesign the network’s token economics, including a novel engagement mining game that incentivizes platform usage, hodling, and liquidity.',
      technologies: ['Web3 Integrations', 'Mobile', 'Token Economics'],
      bullets: [],
      imageSrc: 'imgs/project-graphics/minds-compose.svg',
    }
  },
  Near: {
    name:'Near',
    link: 'https://near.org/',
    icon: 'imgs/logos/near.png',
    iconHighlightColor: '#00C1DE',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(72%) sepia(95%) saturate(334%) hue-rotate(355deg) brightness(102%) contrast(101%)',
    highlightColor: '#FFFFFF',
    colorIcon: true,
    textColor: '#43434d',
    project: {
      description: 'Near is a fast, low-cost blockchain built for developers.\n\ndOrg is handling fullstack development of the first Proof of Attendance protocol on Near.',
      technologies: ['Frontend', 'Web3 Integrations', 'Smart Contracts', 'Backend', 'Software Architecture'],
      bullets: [],
      imageSrc: 'imgs/logos/near.png',
    }
  },
  Polywrap: {
    name:'Polywrap',
    link: 'https://polywrap.io/',
    icon: 'imgs/logos/polywrap-logo.png',
    colorIcon: true,
    iconHighlightColor: '#60c093',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(66%) sepia(37%) saturate(459%) hue-rotate(100deg) brightness(96%) contrast(88%)',
    highlightColor: '#000000',
    textColor: '#ffffff',
    textColorFilter: 'brightness(0) saturate(100%) invert(55%) sepia(32%) saturate(544%) hue-rotate(143deg) brightness(95%) contrast(92%)',
    project: {
      description: 'Polywrap is a developer pipeline that makes it easy to interact with web3 protocols from anywhere. The project is stewarded by the Polywrap DAO, a tokenized alliance of protocol partners, financial backers, and builder teams.\n\ndOrg provides the DAO with continuous development services, including the core client, IDE, and developer docs.',
      technologies: ['Developer Tools', 'Software Architecture', 'Governance Design'],
      bullets: [
        {text: 'Watch the UniGrants presentation', url: 'https://youtu.be/MQFLaXUm1-0?t=3265'},
        {text: 'Read the announcement', url: 'https://blog.polywrap.io/p/introducing-web3api-the-universal'}
      ],
      imageSrc: 'imgs/logos/polywrap-logo.png'
    }
  },
  Rarible: {
    name:'Rarible',
    link: 'https://www.rarible.com/',
    icon: 'imgs/logos/rarible-simple.svg',
    iconHighlightColor: '#FEDA03',
    highlightColor: '#ffffff',
    colorIcon: true,
    textColor: '#000000',
    project: {
      description: 'Rarible is a leading platform for creating, selling and collecting NFTs.\n\ndOrg is building an SDK to drastically improve the developor experience for integrating the Rarible protocol into any app.',
      technologies: ['Developer Tools', 'Software Architecture'],
      bullets: [],
      imageSrc: 'imgs/logos/rarible.svg',
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
      description: 'dOrg is proud to be working with TQ Tezos and the broader Tezos ecosystem on Homebase, an app that enables anyone to launch DAOs on the Tezos blockchain in a few clicks.\n\ndOrg designed and built the Homebase app on top of the BaseDAO smart contract framework, utilizing Taquito and Beacon SDK. We also contributed to the BaseDAO framework spec and design as product co-owners.',
      technologies: ['Web3 Integrations', 'Frontend', 'UI/UX Design'],
      bullets: [
        {text: 'Read the announcement', url: 'https://tqtezos.medium.com/daos-on-tezos-announcing-homebase-80bbecbb9bfe'},
        {text: 'Check out the repo', url: 'https://github.com/dOrgTech/homebase-app'}
      ],
      imageSrc: 'imgs/logos/tezos-logo-blue.png'
    }
  },
}
