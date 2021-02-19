export interface Route {
  path: string;
  name: string;
}

export interface Routes {
  home: Readonly<Route>;
  about: Readonly<Route>;
  careers: Readonly<Route>;
  contact: Readonly<Route>;
}

export const routes: Routes = {
  home: {
    path: '/',
    name: 'HOME'
  },
  about: {
    path: '/about',
    name: 'ABOUT'
  },
  careers: {
    path: '/careers',
    name: 'CAREERS'
  },
  contact: {
    path: '/contact',
    name: 'CONTACT'
  }
}

export interface ExternalLinks {
  builderInterest: Readonly<Route>;
}

export const externalLinks: ExternalLinks = {
  builderInterest: {
    path: 'https://share.hsforms.com/1qdN5EBi_SJW7U1c5cJigUw5gqvx',
    name: 'Builder Interest'
  }
}
