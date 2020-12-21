export interface Route {
  path: string;
}

export interface Routes {
  home: Readonly<Route>;
  about: Readonly<Route>;
}

export const routes: Routes = {
  home: {
    path: '/'
  },
  about: {
    path: '/contact'
  }
}
