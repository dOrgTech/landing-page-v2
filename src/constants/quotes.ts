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
    text: 'Communication with dOrg team is easy and generally quite responsive.',
    citation: 'Daniel Yanev - DeversiFi',
  },
  client3: {
    text: 'I look forward to working with you in the future!',
    citation: 'Michael Johnson - Ideologi IP LLC',
  },
}
