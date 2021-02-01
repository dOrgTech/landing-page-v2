
// iconHighlightFilter is based on output from https://codepen.io/sosuke/pen/Pjoqqp
export interface Client {
  name: string;
  link: string;
  icon: string;
  iconHighlightFilter: string;
  highlightColor: string;
  textColor: string;
  project: Project;
}

export interface Project {
  description: string;
  technologies: string[];
  bullets: string[];
  illustration?: Illustration
}

export interface Illustration {
  view: JSX.Element
  position: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
  }
}



