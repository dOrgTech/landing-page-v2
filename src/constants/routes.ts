export interface Route {
  path: string;
}

export interface Routes {
  home: Readonly<Route>;
  about: Readonly<Route>;
  careers: Readonly<Route>;
  contact: Readonly<Route>;
}

export const routes: Routes = {
  home: {
    path: '/'
  },
  about: {
    path: '/about'
  },
  careers: {
    path: '/careers'
  },
  contact: {
    path: '/contact'
  }
}
