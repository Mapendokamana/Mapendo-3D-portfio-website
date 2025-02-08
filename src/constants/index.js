import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  YYCTech,
  freelancer,
  Amazon,
  HomeDepot,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Customer Service Representative",
    company_name: "Home Depot",
    icon: HomeDepot,
    iconBg: "#383E56",
    date: "April 2019 - September 2021",
    points: [
      "Addressing the requirements and inquiries of 50+ clients everyday and providing remarkable client assistance at a bustling location that served hundreds of individuals technologies.",
      "Conducting 20+ phone calls to follow up with clients who made online purchases while ensuring the effective promotion of other store products and services to increase potential revenue.",
      "Collaborating with team members and optimizing store productivity by 15%.",
      "Assisting cashiers in successfully troubleshooting their cash registers and peripheral devices so that the flow of operations was uninterrupted.",
    ],
  },
  {
    title: "Ambassador",
    company_name: "Amazon",
    icon: Amazon,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - April 2023",
    points: [
      "Guiding associates with organization's rules and policies.",
      "Tracking progress of new hires and providing guidance in innovative areas of improvement.",
      "Analyzing and reporting employee misconducts to management.",
      "Effectively collaborating with fellow associates as a team player."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#383E56",
    date: "April 2023 - Current",
    points: [
      "Designing and developing websites using HTML, CSS, JavaScript, and React for multiple clients.",
      "Implementing custom features, ensuring cross-browser compatibility, and optimized performance.",
      " Collaborating with stakeholders, conducting thorough testing, and providing ongoing maintenance and support.",
      "Maintaining effective communication with clients to ensure project success and satisfaction.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "YYC Tech Consulting",
    icon: YYCTech,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      " Supporting the development of Vision Safe's inventory management tool, UInventory.NET, as part of YYC Tech's client project in the Aerospace industry.",
      "Assessing the utility, PingMon, for QuickBooks desktop integration with UInventory, analyzing its current functionality and identifying required API connector updates.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Contributing to the development of an ecommerce site by working closely with the team to create an attractive website that facilitates easy product purchase for both B2C and B2B customers, with a focus on setting up pre-orders and exploring upsell opportunities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mapendo proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mapendo does.",
    name: "Christian Runiga",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mapendo optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kevin Lim",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };