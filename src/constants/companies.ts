import {Client} from "./clients";

export interface Companies {
  Balancer: Readonly<Client>;
  Boardroom: Readonly<Client>;
  Centrality: Readonly<Client>;
  Compound: Readonly<Client>;
  DeversiFi: Readonly<Client>;
  eToro: Readonly<Client>;
  Gnosis: Readonly<Client>;
  TheGraph: Readonly<Client>;
  Minds: Readonly<Client>;
  ParaSwap: Readonly<Client>;
  Sovryn: Readonly<Client>;
  Stakedus: Readonly<Client>;
  Stakehound: Readonly<Client>;
}

export const companies: Companies = {
  Balancer: {
    name:'Balancer',
    link: 'https://balancer.finance/',
    icon: 'imgs/logos/Balancer.svg',
    highlightColor: '#41476b',
    project: {
      description: 'Balancer is a decentralized exchange protocol with multi-token automated market-making.\n\ndOrg designed and built the very first iteration of the Balancer Exchange and Pool Manager web apps. We worked closely with the core team to craft an experience that would be intuitive for new users yet powerful enough to leverage the full functionality of the underlying protocol. We also built the necessary middleware to handle internal data and external API interactions.',
      technologies: ['Web3 Integrations', 'Frontend', 'UI/UX Design'],
      bullets: [
        {text: 'Check out the app', url: 'https://pools.balancer.exchange/#/explore'}
      ],
      imageSrc: 'imgs/logos/Balancer.svg'
    }
  },
  Boardroom: {
    name:'Boardroom',
    link: 'https://www.boardroom.info/',
    icon: 'imgs/logos/Boardroom.svg',
    iconHighlightColor: '#09afdf',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(58%) sepia(82%) saturate(2727%) hue-rotate(156deg) brightness(96%) contrast(93%)',
    highlightColor: '#ffffff',
    textColor: '#333333',
    textColorFilter: 'brightness(0) saturate(100%) invert(13%) sepia(0%) saturate(0%) hue-rotate(237deg) brightness(101%) contrast(82%)',
    project: {
      description: 'Boardroom is an integrated governance platform for crypto protocols.\n\ndOrg extended the team’s capacity by building and documenting a governance SDK complete with client-side aggregations, mutations support, type safety, and data validation. We also integrated the first wave of protocols– including Compound, Aave, Maker, Uniswap, Snapshot, Powerpool and Yearn.',
      technologies: ['Backend', 'Web3 Integrations', 'Software Architecture'],
      bullets: [
        {text: 'Check out the app', url: 'https://app.boardroom.info/'},
        {text: 'Read the docs', url: 'https://docs.boardroom.info/'}
      ],
      imageSrc: ''
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
      description: 'Centrality maintains CENNZnet, the world’s first natively permissioned, public blockchain.\n\ndOrg developed a one-way token bridge for migrating the CENNZ and CPAY tokens from Ethereum to CENNZnet mainnet. This included the migration contract, off-chain oracle, and mobile-friendly web app.',
      technologies: ['Smart Contracts', 'Backend', 'Frontend'],
      bullets: [],
      imageSrc: 'imgs/project-graphics/centrality-graphic.svg'
    }
  },
  Compound: {
    name:'Compound',
    link: 'https://compound.finance/',
    icon: 'imgs/logos/Compound.svg',
    highlightColor: '#00a977',
    project: {
      description: 'Compound is a decentralized lending protocol with token-holder governance.\n\nAs part of MetaCartel’s Dragon Quest hackathon, we won Compound’s bounty for building a Governance SDK in Node for interacting with the Compound’s voting contracts.',
      technologies: ['Developer Tools'],
      bullets: [
        {text: 'Check out the repo', url: 'https://github.com/dOrgTech/compound-sdk'},
        {text: 'View bounty submission', url: 'https://explorer.bounties.network/bounty/3963'}
      ],
      imageSrc: 'imgs/logos/Compound.svg',
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
      description: 'DeversiFi is a decentralized exchange optimized for high speed, low fee trades.\n\ndOrg designed and built the reputation bootstrapper, which allows users to lock tokens for voting power in the Nectar DAO. We also implemented the frontend and snapshot utility for DeversiFi’s liquidity mining program, which rewarded users in BAL and time-locked NEC.',
      technologies: ['UX/UI Design', 'Web3 Integrations', 'Frontend'],
      bullets: [
        {text: 'Check out the reputation bootstrapping app', url: 'https://stake.nectar.community/#/'},
        {text: 'Check out the liquidity mining app', url: 'https://beehive.nectar.community/'}
      ],
      imageSrc: 'imgs/logos/Deversifi.svg',
    }
  },
  eToro: {
    name:'eToro',
    link: 'https://www.etoro.com/',
    icon: 'imgs/logos/eToro.svg',
    iconHighlightFilter: '',
    highlightColor: '#6aac0e',
    project: {
      description: 'How can a decentralized Universal Basic Income protect against fraudulent accounts?\n\ndOrg teamed up with the GoodDollar team at eToro and DAOstack answer this question. What resulted was the Identity DAO, a reputation-weighted circle of trust for verifying user identities without centralization. In addition to building out the prototype, dOrg specified the Identity DAO’s technical architecture, governance incentives, and UI mock-ups.',
      technologies: ['Governance Design', 'Mobile', 'Web3 Integrations'],
      bullets: [
        {text: 'Check out the repo', url: 'https://github.com/dOrgTech/ID-DAO'}
      ],
      imageSrc: 'imgs/logos/eToro.svg',
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
      description: 'Gnosis builds critical DeFi infrastructure like the Gnosis Safe, Gnosis Protocol, and Conditional Tokens Framework.\n\ndOrg received a GECO grant from Gnosis in 2019 to design and develop a tool for decentralized fundraising that leverages bonding curves and reputation-weighted voting to align incentives.',
      technologies: ['Smart Contracts', 'Web3 Integrations', 'Software Architecture'],
      bullets: [
        {text: 'Read the blog post', url: 'https://blog.gnosis.pm/geco-community-spotlight-fd7ee4b8c8a4'},
        {text: 'Watch the presentation', url: 'https://www.youtube.com/watch?v=TTk-I7QmBm0'}
      ],
      imageSrc: 'imgs/logos/gnosis-logo-color.svg',
    }
  },
  TheGraph: {
    name: 'The Graph',
    link: 'https://thegraph.com',
    icon: 'imgs/logos/TheGraph.svg',
    highlightColor: 'url(/imgs/project-backgrounds/the-graph.png) repeat top left, #0C0A1D',
    iconHighlightColor: '#6f4cff',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(35%) sepia(51%) saturate(6120%) hue-rotate(241deg) brightness(100%) contrast(104%)',
    project: {
      description: 'The Graph is Web3’s largest indexing protocol. The network allows dApps to quickly load data without relying on centralized caching servers.\n\nThe Graph hired dOrg to research and develop an experimental Mutations feature. Mutations enable client-side write operations, complementing the read-only operations that the network currently handles.',
      technologies: ['Developer Tools', 'Software Architecture', 'Web3 Integrations'],
      bullets: [
        {text: 'Watch the demo', url: 'https://www.youtube.com/watch?v=GRnTJBxhQIw'},
        {text: 'Read the spec', url: 'https://github.com/graphprotocol/rfcs/blob/master/rfcs/0003-mutations.md'},
        {text: 'Check out the repo', url: 'https://github.com/graphprotocol/mutations'}
      ],
      imageSrc: 'imgs/project-graphics/the-graph-phone.png'
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
  ParaSwap: {
    name:'ParaSwap',
    link: 'https://paraswap.io/#/',
    icon: 'imgs/logos/ParaSwap.svg',
    highlightColor: '#005ede',
    project: {
      description: 'ParaSwap is a decentralized exchange (DEX) aggregator which aims to become the connecting tissue between DeFi protocols.\n\ndOrg provided ongoing development services to improve and optimize their aggregation algorithms, API, and UI.',
      technologies: ['Smart Contracts', 'Backend', 'Software Architecture', 'Frontend'],
      bullets: [],
      imageSrc: 'imgs/logos/ParaSwap.svg',
    }
  },
  Sovryn: {
    name:'Sovryn',
    link: 'https://sovryn.app/',
    icon: 'imgs/logos/sovryn.svg',
    highlightColor: '#ffffff',
    iconHighlightColor: '#fdc009',
    iconHighlightFilter: 'brightness(0) saturate(100%)',
    textColor: '#000000',
    textColorFilter: 'brightness(0) saturate(100%)',
    project: {
      description: 'Sovryn is a decentralized bitcoin trading and lending platform built on RSK.\n\nSovryn enlisted dOrg to spec-out and implement a collateralized stablecoin on top of the Sovryn protocol. The system includes stability fees, collateralized debt positions, and liquidation management functionality.',
      technologies: ['Smart Contracts', 'Software Architecture'],
      bullets: [],
      imageSrc: 'imgs/project-graphics/sovryn-beach-coins.svg'
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
      description: 'Staked helps exchanges, VCs, and retail investors to earn fixed income yield on crypto assets without giving up custody.\n\nStaked hired dOrg to build a custom Aragon DAO that enables their users to govern the Robo Advisor for Yield (RAY) system. The project automates incentives for depositors, yield strategists, liquidity providers. We worked closely with the core team and external auditors to ensure system integrity throughout the project lifecycle.',
      technologies: ['Smart Contracts', 'Web3 Integrations', 'Software Architecture'],
      bullets: [],
      imageSrc: 'imgs/project-graphics/staked-diamond.svg'
    }
  },
  Stakehound: {
    name:'Stakehound',
    link: 'https://stakehound.com/',
    icon: 'imgs/logos/stakehound-logo.png',
    colorIcon: true,
    iconHighlightColor: '#00ceff',
    iconHighlightFilter: 'brightness(0) saturate(100%) invert(59%) sepia(77%) saturate(1571%) hue-rotate(149deg) brightness(101%) contrast(103%)',
    highlightColor: '#0E223D',
    project: {
      description: 'Stakehound lets you wrap tokens from your favorite PoS blockchains into DeFi compatible versions on Ethereum.\n\ndOrg took on end-to-end development of Stakehound’s liquidity mining program– including specification, multiplexed geyser contracts, UI mock-ups, Uniswap integration, responsive frontend, and testing.',
      technologies: ['Smart Contracts', 'Frontend', 'UI/UX Design'],
      bullets: [],
      imageSrc: 'imgs/project-graphics/stakehound-brand.png'
    }
  },
}