export interface Quote {
  text: string;
  citation: string;
}

export interface Quotes {
  client1: Readonly<Quote>;
  client2: Readonly<Quote>;
  client3: Readonly<Quote>;
}

export const quotes: Quotes = {
  client1: {
    text: 'Really great experiences working with the dOrg team.',
    citation: 'Lillian Wang - Centrality',
  },
  client2: {
    text: 'dOrg helped me save 15% on my car insurance.',
    citation: 'Satoshi - Bitcoin Inventor',
  },
  client3: {
    text: 'I love cookies!',
    citation: 'Cookie Monster - Sesame Street',
  },
}
