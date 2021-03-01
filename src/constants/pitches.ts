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
    detail: 'We dynamically match your project with the relevant expertise at the right time.',
    pitch: 'Swarm Methodology',
    icon: 'imgs/graph-icon.svg'
  },
  coordination: {
    detail: 'Dedicated PM, live deliverable tracking, weekly check-ins, chat support.',
    pitch: 'Continuous Coordination',
    icon: 'imgs/task-flow-icon.svg'
  },
  edge: {
    detail: 'We stay on top of the latest trends in Web3 so that you don’t have to.',
    pitch: 'Bleeding Edge',
    icon: 'imgs/computer-gear-icon.svg'
  },
  alignment: {
    detail: 'We dogfood your products and accept native tokens to align incentives.',
    pitch: 'Long-term Alignment',
    icon: 'imgs/server-jewel-icon.svg'
  }
}
