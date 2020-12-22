export interface Article {
  url: string;
  logo: string;
  logo2x: string;
  logo3x: string;
}

export interface Press {
  coindesk: Readonly<Article>;
  hackernoon: Readonly<Article>;
  mir: Readonly<Article>;
  cointelegraph: Readonly<Article>;
}

export const press: Press = {
  coindesk: {
    url: 'https://google.com',
    logo: 'imgs/logos/coindesk.png',
    logo2x: 'imgs/logos/coindesk-2x.png',
    logo3x: 'imgs/logos/coindesk-3x.png'
  },
  hackernoon: {
    url: 'https://google.com',
    logo: 'imgs/logos/hackernoon.png',
    logo2x: 'imgs/logos/hackernoon-2x.png',
    logo3x: 'imgs/logos/hackernoon-3x.png'
  },
  mir: {
    url: 'https://google.com',
    logo: 'imgs/logos/mir.png',
    logo2x: 'imgs/logos/mir-2x.png',
    logo3x: 'imgs/logos/mir-3x.png'
  },
  cointelegraph: {
    url: 'https://google.com',
    logo: 'imgs/logos/cointelegraph.png',
    logo2x: 'imgs/logos/cointelegraph-2x.png',
    logo3x: 'imgs/logos/cointelegraph-3x.png'
  }
}