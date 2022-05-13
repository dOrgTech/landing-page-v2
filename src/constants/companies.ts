import { Client } from "./clients";

export interface Companies {
  Balancer: Readonly<Client>;
  Boardroom: Readonly<Client>;
  Cent: Readonly<Client>;
  Compound: Readonly<Client>;
  DeversiFi: Readonly<Client>;
  Doingud: Readonly<Client>;
  eToro: Readonly<Client>;
  TheGraph: Readonly<Client>;
  Opolis: Readonly<Client>;
  ParaSwap: Readonly<Client>;
  Sovryn: Readonly<Client>;
  Stakedus: Readonly<Client>;
  Starkware: Readonly<Client>;
}

export const companies: Companies = {
  Balancer: {
    name: "Balancer",
    link: "https://balancer.finance/",
    icon: "imgs/logos/Balancer.svg",
    highlightColor: "#41476b",
    project: {
      description:
        "Balancer is a decentralized exchange protocol with multi-token automated market-making.\n\ndOrg designed and built the very first iteration of the Balancer Exchange and Pool Manager web apps. We worked closely with the core team to craft an experience that would be intuitive for new users yet powerful enough to leverage the full functionality of the underlying protocol. We also built the necessary middleware to handle internal data and external API interactions.",
      technologies: ["Web3 Integrations", "Frontend", "UI/UX Design"],
      bullets: [
        {
          text: "Check out the app",
          url: "https://pools.balancer.exchange/#/explore",
        },
      ],
      imageSrc: "imgs/logos/Balancer.svg",
    },
  },
  Boardroom: {
    name: "Boardroom",
    link: "https://www.boardroom.info/",
    icon: "imgs/logos/Boardroom.svg",
    iconHighlightColor: "#09afdf",
    iconHighlightFilter:
      "brightness(0) saturate(100%) invert(58%) sepia(82%) saturate(2727%) hue-rotate(156deg) brightness(96%) contrast(93%)",
    highlightColor: "#ffffff",
    textColor: "#333333",
    textColorFilter:
      "brightness(0) saturate(100%) invert(13%) sepia(0%) saturate(0%) hue-rotate(237deg) brightness(101%) contrast(82%)",
    project: {
      description:
        "Boardroom is an integrated governance platform for crypto protocols.\n\ndOrg extended the team’s capacity by building and documenting a governance SDK complete with client-side aggregations, mutations support, type safety, and data validation. We also integrated the first wave of protocols– including Compound, Aave, Maker, Uniswap, Snapshot, Powerpool and Yearn.",
      technologies: ["Backend", "Web3 Integrations", "Software Architecture"],
      bullets: [
        { text: "Check out the app", url: "https://app.boardroom.info/" },
        { text: "Read the docs", url: "https://docs.boardroom.info/" },
      ],
      imageSrc: "imgs/project-graphics/Boardroom.svg",
    },
  },
  Cent: {
    name: "Cent",
    link: "https://cent.co/",
    icon: "imgs/logos/cent_logo_white.png",
    highlightColor: "#f04136",
    project: {
      description:
        "Cent is a family of ad-free products and services designed to help anyone earn a creative income.\n\ndOrg worked collaboratively with Cent on developing the Hive explorer to demonstrate the opportunities for enhanced media discoverability through web3 metadata. This service facilitates exploration of the relationships between Ethereum addresses by combining NFT ownership history with Jaccard similarity scoring in order to tell users which NFT collectors share interests most similar to their own",
      technologies: ["Frontend", "Backend", "Web3 integrations", "R&D"],
      bullets: [{ text: "Check out the app", url: "https://cent.co" }],
      imageSrc: "imgs/logos/cent_logo_black.png",
    },
  },
  Cent: {
    name:'Cent',
    link: 'https://cent.co/',
    icon: 'imgs/logos/cent_logo_white.png',
    highlightColor: '#f04136',
    project: {
      description: 'Cent is a family of ad-free products and services designed to help anyone earn a creative income.\n\ndOrg worked collaboratively with Cent on developing the Hive explorer to demonstrate the opportunities for enhanced media discoverability through web3 metadata. This service facilitates exploration of the relationships between Ethereum addresses by combining NFT ownership history with Jaccard similarity scoring in order to tell users which NFT collectors share interests most similar to their own',
      technologies: ['Frontend','Backend','Web3 integrations','R&D'],
      bullets: [
        {text: 'Check out the app', url: 'https://cent.co'}
      ],
      imageSrc: 'imgs/logos/cent_logo_black.png'
    }
  },
  Compound: {
    name: "Compound",
    link: "https://compound.finance/",
    icon: "imgs/logos/Compound.svg",
    highlightColor: "#00a977",
    project: {
      description:
        "Compound is a decentralized lending protocol with token-holder governance.\n\ndOrg built a Node SDK for interacting with the Compound voting contracts, winning Compound’s governance bounty at the MetaCartel Dragon Quest hackathon.",
      technologies: ["Developer Tools"],
      bullets: [
        {
          text: "Check out the repo",
          url: "https://github.com/dOrgTech/compound-sdk",
        },
        {
          text: "View bounty submission",
          url: "https://explorer.bounties.network/bounty/3963",
        },
      ],
      imageSrc: "imgs/logos/Compound.svg",
    },
  },
  DeversiFi: {
    name: "DeversiFi",
    link: "https://www.deversifi.com/",
    icon: "imgs/logos/Deversifi.svg",
    iconHighlightColor: "#5500FC",
    iconHighlightFilter:
      "brightness(0) saturate(100%) invert(13%) sepia(99%) saturate(5303%) hue-rotate(263deg) brightness(86%) contrast(135%)",
    highlightColor: "linear-gradient(3.2deg, #040E14 19.19%, #061824 88.66%)",
    project: {
      description:
        "DeversiFi is a decentralized exchange optimized for high speed, low fee trades.\n\ndOrg designed and built the reputation bootstrapper, which allows users to lock tokens for voting power in the Nectar DAO. We also implemented the frontend and snapshot utility for DeversiFi’s liquidity mining program, which rewarded users in BAL and time-locked NEC.",
      technologies: ["UX/UI Design", "Web3 Integrations", "Frontend"],
      bullets: [
        {
          text: "Check out the reputation bootstrapping app",
          url: "https://stake.nectar.community/#/",
        },
        {
          text: "Check out the liquidity mining app",
          url: "https://beehive.nectar.community/",
        },
      ],
      imageSrc: "imgs/logos/Deversifi.svg",
    },
  },
  Doingud: {
    name: "Doingud",
    link: "https://doingud.com/",
    icon: "imgs/logos/doingud-simple.svg",
    colorIcon: "imgs/logos/doingud.svg",
    iconHighlightColor: "#5500FC",
    iconHighlightFilter:
      "brightness(0) saturate(100%) invert(16%) sepia(0%) saturate(1760%) hue-rotate(184deg) brightness(87%) contrast(82%)",
    highlightColor: "#ffffff",
    textColor: "#333333",
    project: {
      description:
        "DoinGud is an NFT ecosystem focused on inspiring creativity and positive social impact.\n\ndOrg is helping to build out the platform's custom capabilities, including governance, decentralized identifiers, and several styles of NFT auction and minting.",
      technologies: ["Smart Contracts", "Web3 Integrations", "Backend"],
      bullets: [
        {
          text: "Read the announcement",
          url: "https://blog.doingud.com/dorg-and-doingud-establish-a-technical-partnership/",
        },
      ],
      imageSrc: "imgs/logos/doingud.svg",
    },
  },
  eToro: {
    name: "eToro",
    link: "https://www.etoro.com/",
    icon: "imgs/logos/eToro.svg",
    iconHighlightFilter: "",
    highlightColor: "#6aac0e",
    project: {
      description:
        "How can a decentralized Universal Basic Income protect against fraudulent accounts?\n\ndOrg teamed up with the GoodDollar team at eToro and DAOstack to answer this question. What resulted was the Identity DAO, a reputation-weighted circle of trust for verifying user identities without centralization. In addition to building out the prototype, dOrg specified the Identity DAO’s technical architecture, governance incentives, and UI mock-ups.",
      technologies: ["Governance Design", "Mobile", "Web3 Integrations"],
      bullets: [
        {
          text: "Check out the repo",
          url: "https://github.com/dOrgTech/ID-DAO",
        },
      ],
      imageSrc: "imgs/logos/eToro.svg",
    },
  },
  TheGraph: {
    name: "The Graph",
    link: "https://thegraph.com",
    icon: "imgs/logos/TheGraph.svg",
    highlightColor:
      "url(/imgs/project-backgrounds/the-graph.png) repeat top left, #0C0A1D",
    iconHighlightColor: "#6f4cff",
    iconHighlightFilter:
      "brightness(0) saturate(100%) invert(35%) sepia(51%) saturate(6120%) hue-rotate(241deg) brightness(100%) contrast(104%)",
    project: {
      description:
        "The Graph is Web3’s largest indexing protocol. The network allows dApps to quickly load data without relying on centralized caching servers.\n\nThe Graph hired dOrg to research and develop an experimental Mutations feature. Mutations enable client-side write operations, complementing the read-only operations that the network currently handles.",
      technologies: [
        "Developer Tools",
        "Software Architecture",
        "Web3 Integrations",
      ],
      bullets: [
        {
          text: "Watch the demo",
          url: "https://www.youtube.com/watch?v=GRnTJBxhQIw",
        },
        {
          text: "Read the spec",
          url: "https://github.com/graphprotocol/rfcs/blob/master/rfcs/0003-mutations.md",
        },
        {
          text: "Check out the repo",
          url: "https://github.com/graphprotocol/mutations",
        },
      ],
      imageSrc: "imgs/project-graphics/the-graph-phone.png",
    },
  },
  Opolis: {
    name: "Opolis",
    link: "https://opolis.co/",
    icon: "imgs/logos/opolis.png",
    textColor: "#404040",
    highlightColor: "#ffffff",
    project: {
      description:
        "Opolis is building next-generation benefits layer for the freelancer economy.\n\ndOrg is supporting the Opolis team on fullstack improvements to its Employee Dashboard, including token integrations, token streaming, wallet integrations, fiat on-ramps and more!",
      technologies: [
        "Smart Contracts",
        "Backend",
        "Software Architecture",
        "Frontend",
      ],
      bullets: [],
      imageSrc: "imgs/logos/opolis.png",
    },
  },
  ParaSwap: {
    name: "ParaSwap",
    link: "https://paraswap.io/#/",
    icon: "imgs/logos/ParaSwap.svg",
    highlightColor: "#005ede",
    project: {
      description:
        "ParaSwap is a decentralized exchange (DEX) aggregator which aims to become the connecting tissue between DeFi protocols.\n\ndOrg provided ongoing development services to improve and optimize their aggregation algorithms, API, and UI.",
      technologies: [
        "Smart Contracts",
        "Backend",
        "Software Architecture",
        "Frontend",
      ],
      bullets: [],
      imageSrc: "imgs/logos/ParaSwap.svg",
    },
  },
  Sovryn: {
    name: "Sovryn",
    link: "https://sovryn.app/",
    icon: "imgs/logos/sovryn.svg",
    highlightColor: "#ffffff",
    iconHighlightColor: "#fdc009",
    iconHighlightFilter: "brightness(0) saturate(100%)",
    textColor: "#000000",
    textColorFilter: "brightness(0) saturate(100%)",
    project: {
      description:
        "Sovryn is a decentralized bitcoin trading and lending platform built on RSK.\n\nSovryn enlisted dOrg to spec-out and implement a collateralized stablecoin on top of the Sovryn protocol. The system includes stability fees, collateralized debt positions, and liquidation management functionality.",
      technologies: ["Smart Contracts", "Software Architecture"],
      bullets: [],
      imageSrc: "imgs/project-graphics/sovryn-beach-coins.svg",
    },
  },
  Stakedus: {
    name: "Staked.us",
    link: "https://staked.us/",
    icon: "imgs/logos/StakedUs.svg",
    iconHighlightColor: "#515fcb",
    iconHighlightFilter:
      "brightness(0) saturate(100%) invert(19%) sepia(94%) saturate(2659%) hue-rotate(231deg) brightness(84%) contrast(83%)",
    highlightColor: "#102039",
    project: {
      description:
        "Staked helps exchanges, VCs, and retail investors to earn fixed income yield on crypto assets without giving up custody.\n\nStaked hired dOrg to build a custom Aragon DAO that enables their users to govern the Robo Advisor for Yield (RAY) system. The project automates incentives for depositors, yield strategists, and liquidity providers. We worked closely with the core team and external auditors to ensure system integrity throughout the project lifecycle.",
      technologies: [
        "Smart Contracts",
        "Web3 Integrations",
        "Software Architecture",
      ],
      bullets: [],
      imageSrc: "imgs/project-graphics/staked-diamond.svg",
    },
  },
  Starkware: {
    name: "Starkware",
    link: "https://starkware.co/",
    icon: "imgs/logos/starkware.svg",
    iconHighlightColor: "#515fcb",
    iconHighlightFilter:
      "brightness(0) saturate(100%) invert(19%) sepia(94%) saturate(2659%) hue-rotate(231deg) brightness(84%) contrast(83%)",
    highlightColor: "#FF4B49",
    project: {
      description:
        "Starkware uses zero-knowledge technology to bring scalability and privacy to blockchains.\n\nStarkware enlisted dOrg to design and develop the first app on Starknet ahead of its alpha release. dOrg also supports the Starkware ecosystem by developing various tools and libraries that enhance developer experience.",
      technologies: [
        "UX/UI Design",
        "Frontend",
        "Web3 Integrations",
        "Software Architecture",
        "Developer Tools",
      ],
      bullets: [
        {
          text: "Check out the app",
          url: "https://starkware-amm-demo.netlify.app/swap",
        },
        {
          text: "Learn more about our contributions",
          url: "https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95",
        },
      ],
      imageSrc: "imgs/logos/starkware.svg",
    },
  },
};
