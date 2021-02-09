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

const commonDescription = (
  <div>dOrg is a collective of enthusiastic builders from all around the globe.
  We believe in an open and decentralized internet, and are coordinating through a DAO to ensure these values are retained.
  Check out our {handbookLink} to learn about how we operate.
  <br/><br/>
  We are seeking highly skilled and experienced members to contribute building dApps, smart contracts, backend services, prototypes, and experiences.
  <br/><br/>
  <strong>Responsibilities:</strong>
  <ul>
    <li>Work on mission-critical client projects with limited/no supervision.</li>
    <li>Play an active role in the design and architecture of client products.</li>
    <li>Help improve the dOrg organization and DAO experience.</li>
  </ul>
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
  Demonstrated ability to...<br/>
  <ul>
    <li>Learn new technology quickly</li>
    <li>Write secure and high quality code</li>
    <li>Publish & maintain production grade software</li>
  </ul>
  <br/>
  <strong>Benefits:</strong>
  <ul>
    <li>Work on interesting projects 🛠 with talented peers 🥇 anytime, anywhere 🏖</li>
    <li>Earn income for building 💸 commissions for sourcing 📊 and airdrops whenever we ship ☔️</li>
    <li>Leverage shared resourced to launch your own projects 🚀</li>
    <li>Enjoy group benefits like discounted tax prep 📂 paid subscriptions 📡 swag 🧢 and more!</li>
  </ul>
  </div>
)

export const openings: Openings = {
  fullstackEngineer: {
    id: '1',
    role: Role.backend,
    title: 'Fullstack Blockchain Engineer',
    location: '100% Remote',
    description: commonDescription
  },
  frontendDeveloper: {
    id: '2',
    role: Role.frontend,
    title: 'Frontend Developer',
    location: '100% Remote',
    description: commonDescription
  },
  designer: {
    id: '3',
    role: Role.design,
    title: 'UI/UX Designer',
    location: 'Remote / Vancouver / Victoria',
    description: commonDescription
  },
  smartContractEngineer: {
    id: '4',
    role: Role.backend,
    title: 'Smart Contract Engineer',
    location: '100% Remote',
    description: commonDescription
  },
}