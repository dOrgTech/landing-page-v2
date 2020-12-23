export interface Article {
  url: string;
  logo: string;
  logo2x: string;
  logo3x: string;
}

export interface Press {
  coindesk: Readonly<Article>;
  hackernoon: Readonly<Article>;
  mit: Readonly<Article>;
  cointelegraph: Readonly<Article>;
}

export const press: Press = {
  coindesk: {
    url: 'https://www.coindesk.com/dorg-founders-have-created-the-first-limited-liability-dao',
    logo: 'imgs/logos/coindesk.png',
    logo2x: 'imgs/logos/coindesk-2x.png',
    logo3x: 'imgs/logos/coindesk-3x.png'
  },
  hackernoon: {
    url: 'https://hackernoon.com/the-evolution-of-dorg-the-builder-dao-jcz3xxg',
    logo: 'imgs/logos/hackernoon.png',
    logo2x: 'imgs/logos/hackernoon-2x.png',
    logo3x: 'imgs/logos/hackernoon-3x.png'
  },
  mit: {
    url: 'http://legal-engineering.mit.edu/bbllc',
    logo: 'imgs/logos/mit.png',
    logo2x: 'imgs/logos/mit-2x.png',
    logo3x: 'imgs/logos/mit-3x.png'
  },
  cointelegraph: {
    url: 'https://cointelegraph.com/news/dorg-llc-purports-to-be-first-legally-valid-dao-under-us-law',
    logo: 'imgs/logos/cointelegraph.png',
    logo2x: 'imgs/logos/cointelegraph-2x.png',
    logo3x: 'imgs/logos/cointelegraph-3x.png'
  }
}