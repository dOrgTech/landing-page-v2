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
