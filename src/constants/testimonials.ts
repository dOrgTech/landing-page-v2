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
    name: 'Ben Walker',
    title: 'Software Engineer',
    location: 'Seattle',
    testimonial: "I work remotely but still feel like I'm part of a proper office culture in every way (sans free LaCroix). There's so much quality human interaction and collaboration that allow us to create such bad-ass work.",
    photo: 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg',
    background: 'imgs/testimonial-backgrounds/default-testimonials-background.png',
  },
  person2: {
    name: 'Walk Benner',
    title: 'Software Developer',
    location: 'New York',
    testimonial: "I work remotely but still feel like I'm part of a proper office culture in every way (sans free LaCroix). There's so much quality human interaction and collaboration that allow us to create such bad-ass work.",
    photo: 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg',
    background: 'imgs/testimonial-backgrounds/default-testimonials-background.png',
  },
  person3: {
    name: 'Reklaw Neb',
    title: 'Software Architect',
    location: 'Guatemala City',
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    photo: 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg',
    background: 'imgs/testimonial-backgrounds/default-testimonials-background.png',
  },
}
