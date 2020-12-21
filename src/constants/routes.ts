export interface Route {
  path: string;
}

export interface Routes {
  home: Readonly<Route>;
  contact: Readonly<Route>;
}

export const routes: Routes = {
  home: {
    path: '/'
  },
  contact: {
    path: '/contact'
  }
}
