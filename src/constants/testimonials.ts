export interface Testimonial {
  name: string;
  title: string;
  location: string;
  testimonial: string;
  photo: string;
  background: string;
}

export interface Testimonials {
  person1: Readonly<Testimonial>;
  person2: Readonly<Testimonial>;
  person3: Readonly<Testimonial>;
}

export const testimonials: Testimonials = {
  person1: {
    name: 'Jacob Hamilton',
    title: 'dOrg Builder',
    location: 'Hawaii',
    testimonial: "Working at dOrg is like being on the Brazil football team. Except that one game we don't mention in case there are Brazilians around. But really, if you're a developer, all we do is work on \"teams\", but in reality dOrg is the only team I've ever been on. And that's visibly, palpably the reason we keep scoring and winning. It's incredible.",
    photo: 'https://i.ibb.co/TrgJ1hY/image.png',
    background: 'imgs/testimonials/default-testimonials-background.png',
  },
  person2: {
    name: 'Roberto Henriquez-Perozo',
    title: 'dOrg Builder',
    location: 'Madrid',
    testimonial: "Joining dOrg allowed me to work 100% remotely on impactful projects while learning with a global team of skilled web3 professionals. As a freelancer, I am able to commit as many hours as I want to specific projects, tackling the areas which interest me the most and developing new abilities which are essential to build a decentralized internet.",
    photo: 'https://i.ibb.co/SV7B22p/image.png',
    background: 'imgs/testimonials/default-testimonials-background.png',
  },
  person3: {
    name: 'Kris Bitney',
    title: 'dOrg Builder',
    location: 'Saint Louis',
    testimonial: "I work while I travel. I choose my own hours. I drink way too much coffee. This is freedom.",
    photo: 'https://i.ibb.co/Sfr6Q00/image.png',
    background: 'imgs/testimonials/default-testimonials-background.png',
  },
}
