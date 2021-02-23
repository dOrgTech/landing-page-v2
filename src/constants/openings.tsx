import React from "react";


export enum Role {
  design,
  frontend,
  backend
}

export interface Opening {
  id: string;
  role: Role;
  title: string;
  location: string;
  description: JSX.Element;
}

export interface Openings {
  fullstackEngineer: Readonly<Opening>;
  frontendDeveloper: Readonly<Opening>;
  designer: Readonly<Opening>;
  smartContractEngineer: Readonly<Opening>;
}

export const openings: Openings = {
  fullstackEngineer: {
    id: '1',
    role: Role.backend,
    title: 'Fullstack Blockchain Engineer',
    location: '100% Remote',
    description: (
      <div>
        Lead mission-critical client projects and improve the dOrg experience.
        <br/><br/>
        <strong>Minimum Qualifications:</strong>
        <br/>
        3+ years of experience with some of these...
        <ul>
          <li>Solidity, Vyper</li>
          <li>React, Angular, Vue</li>
          <li>Redux, Hooks</li>
          <li>Subgraphs</li>
          <li>TypeScript, JavaScript</li>
          <li>Node</li>
          <li>Rust, Python, Go</li>
        </ul>
      </div>
    )
  },
  frontendDeveloper: {
    id: '2',
    role: Role.frontend,
    title: 'Frontend Developer',
    location: '100% Remote',
    description: (
      <div>
        Build mission-critical dApps for clients and improve the dOrg experience.
        <br/><br/>
        <strong>Minimum Qualifications:</strong>
        <ul/>
        1+ years of experience with some of these...
        <ul>
          <li>TypeScript, JavaScript</li>
          <li>React, Angular, Vue</li>
          <li>Web3.js, ethers.js</li>
          <li>Redux, Hooks</li>
          <li>Bonus: Blockchain, Smart Contracts, P2P Technologies</li>
        </ul>
      </div>
    )
  },
  designer: {
    id: '3',
    role: Role.design,
    title: 'UI/UX Designer',
    location: '100% Remote',
    description: (
      <div>
        Create interactive mock-ups and branding assets for external and internal and products.
        <br/><br/>
        <strong>Minimum Qualifications:</strong>
        <ul/>
        1+ years of experience with some of these...
        <ul>
          <li>Figma, Sketch</li>
          <li>After Effects, Motion Graphics</li>
          <li>Photoshop, Illustrator</li>
          <li>HTML, CSS, JavaScript</li>
        </ul>
        Demonstrated ability to...
        <ul>
          <li>Learn new technology quickly</li>
          <li>Create professional and high quality branding assets and UI interfaces</li>
          <li>Improve and optimize existing user experiences</li>
        </ul>
      </div>
    )
  },
  smartContractEngineer: {
    id: '4',
    role: Role.backend,
    title: 'Smart Contract Engineer',
    location: '100% Remote',
    description: (
      <div>
        Play in active role in the architecture, development, and review of mission-critical smart contract protocols.
        <br/><br/>
        <strong>Minimum Qualifications:</strong>
        <ul/>
        1+ years of experience with some of these...
        <ul>
          <li>Solidity</li>
          <li>Vyper</li>
          <li>Subgraphs</li>
        </ul>
        Basic understanding of...
        <ul>
          <li>Cryptographic tools (merke trees, hash functions, etc)</li>
          <li>Smart contract security best practices</li>
          <li>Game theory and economics</li>
        </ul>
      </div>
    )
  },
}