
// iconHighlightFilter is based on output from https://codepen.io/sosuke/pen/Pjoqqp
export interface Client {
  name: string;
  link: string;
  icon: string;
  iconHighlightFilter: string;
  highlightColor: string;
  project: Project;
}

export interface Project {
  description: string;
  technologies: string[];
  bullets: string[];
}




