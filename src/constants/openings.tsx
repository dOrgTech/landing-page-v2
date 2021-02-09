import React from "react";
import {theme} from "../theme";

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

const handbookLink = (
  <a href='https://docs.dorg.tech/' target='_blank' rel='noopener noreferrer'
    style={{ textDecoration: 'none', color: theme.palette.text.secondary}}>
  handbook
  </a>
)

const dOrgintroduction = (
  <div>dOrg is a collective of enthusiastic builders from all around the globe.
  We believe in an open and decentralized internet, and are coordinating through a DAO to ensure these values are retained.
  Check out our {handbookLink} to learn about how we operate.
  <br/><br/>
    We are seeking highly skilled and experienced members to contribute building dApps, smart contracts, backend services, prototypes, and experiences.
  </div>
)

const developerResponsibilities = (
  <div>
    <strong>Responsibilities:</strong>
    <ul>
      <li>Work on mission-critical client projects with limited/no supervision</li>
      <li>Play an active role in the design and architecture of client products</li>
      <li>Help improve the dOrg organization and DAO experience</li>
    </ul>
  </div>
)

const benefits = (<
  div>
  <strong>Benefits:</strong>
  <ul>
    <li>Work on interesting projects 🛠 with talented peers 🥇 anytime, anywhere 🏖</li>
    <li>Earn income for building 💸 commissions for sourcing 📊 and airdrops whenever we ship ☔️</li>
    <li>Leverage shared resourced to launch your own projects 🚀</li>
    <li>Enjoy group benefits like discounted tax prep 📂 paid subscriptions 📡 swag 🧢 and more!</li>
  </ul>
</div>
)

const developerDemonstrated = (
  <div>
  Demonstrated ability to...<br/>
    <ul>
      <li>Learn new technology quickly</li>
      <li>Write secure and high quality code</li>
      <li>Publish & maintain production grade software</li>
    </ul>
  </div>
)

export const openings: Openings = {
  fullstackEngineer: {
    id: '1',
    role: Role.backend,
    title: 'Fullstack Blockchain Engineer',
    location: '100% Remote',
    description: (
      <div>
        {dOrgintroduction}
        <br/>
        {developerResponsibilities}
        <br/>
        <strong>Minimum Qualifications:</strong>
        <ul/>
        3+ years of experience with some of these...
        <ul>
          <li>Solidity, Vyper</li>
          <li>React, Angular, Vue</li>
          <li>Redux / Hooks</li>
          <li>Subgraphs</li>
          <li>TypeScript / JavaScript</li>
          <li>Node</li>
          <li>Rust, Python, Go</li>
        </ul>
        {developerDemonstrated}
        <br/>
        {benefits}
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
        {dOrgintroduction}
        <br/>
        {developerResponsibilities}
        <br/>
        <strong>Minimum Qualifications:</strong>
        <ul/>
        Demonstrated experience...
        <ul>
          <li>Developing dApps and other blockchain products</li>
        </ul>
        1+ years of experience with some of these...
        <ul>
          <li>TypeScript / JavaScript</li>
          <li>React, Angular, Vue</li>
          <li>Web3.js, ethers.js</li>
          <li>Redux / Hooks</li>
          <li>Bonus: Blockchain, P2P Technologies, Solidity, Python, Rust</li>
        </ul>
        {developerDemonstrated}
        <br/>
        {benefits}
      </div>
    )
  },
  designer: {
    id: '3',
    role: Role.design,
    title: 'UI/UX Designer',
    location: 'Remote / Vancouver / Victoria',
    description: (
      <div>
        {dOrgintroduction}
        <br/>
        <strong>Responsibilities:</strong>
        <ul>
          <li>Work on mission-critical client projects with limited/no supervision</li>
          <li>Play an active role in the design, UI, and branding of internal and external products</li>
          <li>Help improve the dOrg organization and DAO experience</li>
        </ul>
        <br/>
        <strong>Minimum Qualifications:</strong>
        <ul/>
        1+ years of experience with some of these...
        <ul>
          <li>Figma / Sketch</li>
          <li>After Effects / Motion Graphics</li>
          <li>Photoshop / Illustrator</li>
          <li>HTML / CSS / JavaScript</li>
        </ul>
        A passion for...
        <ul>
          <li>Decentralization, Cryptocurrency, Web3, Blockchain, DAOs, DeFi</li>
          <li>Graphic Design, Animation, Dashboards, Branding, Storytelling</li>
        </ul>
        Demonstrated ability to...
        <ul>
          <li>Learn new technology quickly</li>
          <li>Create professional and high quality branding assets and UI interfaces</li>
          <li>Improve and optimize existing user experiences</li>
        </ul>
        <br/>
        {benefits}
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
        {dOrgintroduction}
        <br/>
        {developerResponsibilities}
        <br/>
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
        {developerDemonstrated}
        <br/>
        {benefits}
      </div>
    )
  },
}