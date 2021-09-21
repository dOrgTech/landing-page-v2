export interface Pitch {
    detail: string;
    pitch: string;
    icon: string;
}

export interface Pitches {
    swarm: Readonly<Pitch>;
    coordination: Readonly<Pitch>;
    edge: Readonly<Pitch>;
    alignment: Readonly<Pitch>;
}

export const pitches: Pitches = {
  swarm: {
    detail: 'Work with the right builders at the right time based on your project’s week-to-week needs.',
    pitch: 'Swarm Methodology',
    icon: 'imgs/graph-icon.svg'
  },
  coordination: {
    detail: 'Interface through a dedicated PM to ensure we continuously satisfy your requirements.',
    pitch: 'Continuous Coordination',
    icon: 'imgs/task-flow-icon.svg'
  },
  edge: {
    detail: 'Leverage our experience building with the latest web3 tech and best practices.',
    pitch: 'Bleeding Edge',
    icon: 'imgs/computer-gear-icon.svg'
  },
  alignment: {
    detail: 'Utilize your project’s tokens to align incentives with our builders.',
    pitch: 'Long-term Alignment',
    icon: 'imgs/server-jewel-icon.svg'
  }
}
