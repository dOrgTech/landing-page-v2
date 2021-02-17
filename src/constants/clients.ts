
// iconHighlightFilter is based on output from https://codepen.io/sosuke/pen/Pjoqqp
export interface Client {
  name: string;
  link: string;
  icon: string;
  highlightColor: string;
  colorIcon?: boolean;
  iconHighlightColor?: string;
  iconHighlightFilter?: string;
  textColor?: string;
  textColorFilter?: string;
  homeTitleBackground?: string;
  project: Project;
}

export interface ProjectBullet {
  text: string;
  url?: string;
}

export interface Project {
  description: string;
  technologies: string[];
  bullets: ProjectBullet[];
  imageSrc?: string;
}



