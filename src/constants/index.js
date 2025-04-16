
import { DiPython } from 'react-icons/di';
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  python,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import petronas from "../assets/company/petronas.png";
import tata from "../assets/company/tata.png";

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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Automation Intern",
    company_name: "Tata Steel BSL",
    icon: tata,
    iconBg: "#383E56",
    date: "Jan 2020 - Jun 2020",
    points: [
      "Developed Python-based automated coil car simulation using Turing Machine model.",
      "Integrated SQL databases for simulating coil operations remotely.",
      "Collaborated across teams to design robust automation systems.",
      "This simulation was performed on Turing machine simulator coded in Python and SQL.",
    ],
  },
  {
    title: "Data Analytics Intern",
    company_name: "Petronas Lubricants International",
    icon: petronas,
    iconBg: "#383E56",
    date: "Feb 2024 - Sept 2024",
    points: [
      "Automated daily sales data retrieval from SAP using Python.",
      "Developed Power BI dashboards for visualizing real-time sales insights.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Reduced manual reporting time by 80% with automated data pipelines and reports.",
      "This streamlined process not only saved time but also ensured accuracy in the reporting, allowing for quick decision-making based on real-time data.",
      " Additionally, the Power BI dashboard provided visual representations that made it easier for personnel to interpret and act upon the information presented.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "TRAVELOGY",
    description:
      "Travelogy is a website created to help users locate well-known tourist destinations. In essence, it is a tourist recommendation system that informs the user of how many visitors came to a particular location during a particular year. The locations are categorised into groups like beaches, forts,historic locations, etc.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Employee Complaint Software",
    description:
      "The main goal is to develop a web-based system for the company to maintain as well as improve the quality of customer service. The system manages information about the services offered to the customers. This system allows customers to make complaints online about various problems faced by them during their interaction with the company, be it with any service or product.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "Employee Attrition Prediction (HR Analytics)",
    description:
      "The Employee Attrition Prediction project focuses on using machine learning techniques to predict whether an employee is likely to leave an organization. It falls under the broader category of HR Analytics and helps companies identify at-risk employees before they decide to leave, allowing HR teams to take proactive steps to reduce turnover and improve retention.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
