
export interface Route {
  path: string;
  name: string;
}

export interface Routes {
  home: Readonly<Route>;
  about: Readonly<Route>;
}

export interface ExternalRoutes {
  blog: Readonly<Route>;
  contact: Readonly<Route>;
  buildWithUs: Readonly<Route>;
}

export interface IconLink {
  path: string;
  icon: string;
}

export interface IconLinks {
  discord: Readonly<IconLink>;
  twitter: Readonly<IconLink>;
  github: Readonly<IconLink>;
  email: Readonly<IconLink>;
  gitBook: Readonly<IconLink>;
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
}

export const externalLinks: ExternalRoutes = {
  blog: {
    path: 'https://blog.dorg.tech/',
    name: 'BLOG'
  },
  contact: {
    path: 'https://airtable.com/shrDwCltoS7MHDfsT',
    name: 'HIRE US'
  },
  buildWithUs: {
    path: 'https://airtable.com/shr0eQZfACL3Yarac',
    name: 'JOIN US'
  },
}

export const iconLinks: IconLinks = {
  discord: {
    path: "https://discord.com/invite/bA9ZM7WXZU",
    icon: '/imgs/footer/discord-logo.svg',
  },
  twitter: {
    path: "https://twitter.com/dOrg_tech",
    icon: '/imgs/footer/twitter-logo.svg',
  },
  github: {
    path: "https://github.com/dOrgTech",
    icon: '/imgs/footer/github-logo.svg',
  },
  email: {
    path: "mailto:contact@dorg.tech",
    icon: '/imgs/footer/email-icon.svg',
  },
  gitBook: {
    path: "https://docs.dorg.tech/",
    icon: './imgs/footer/gitbook-logo.svg'
  }
}