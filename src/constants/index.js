
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


// Import Persistent Systems separately
import persistent from "../assets/company/persistent.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "DevSecOps Engineer",
    icon: web,
  },
  {
    title: "Cloud Infrastructure Engineer",
    icon: mobile,
  },
  {
    title: "CI/CD Pipeline Specialist",
    icon: backend,
  },
  {
    title: "Monitoring & Security (IAM/PAM) ",
    icon: security,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Prometheus",
    icon: prometheus,
  },
  {
    name: "Grafana",
    icon: grafana,
  },
  {
    name: "CyberArk",
    icon: cyberark,
  },
  {
    name: "BeyondTrust",
    icon: beyondtrust,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Shell Scripting",
    icon: bash,
  },
];


const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "Persistent Systems",
    icon: persistent,
    iconBg: "#383E56",
    date: "Feb 2025 - present",
    points: [
      "Built CI/CD pipelines with Jenkins and GitHub Actions.",
      "Containerized applications with Docker and Kubernetes.",
      "Deployed AWS infrastructure using Terraform and Ansible.",
      "Collaborated with teams to improve release cycles and reliability.",
      "Implemented IAM and PAM security with CyberArk & BeyondTrust.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Roushan streamlined our CI/CD pipeline and integrated security checks at every stage. His DevSecOps approach greatly reduced vulnerabilities before production.",
    name: "Yash Deukle",
    designation: "TechOps Engineer",
    company: "NCS Group",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Thanks to Roushan’s automation with Terraform and Kubernetes, our deployments became faster and more secure. He brought real efficiency to our DevOps processes.",
    name: "Kanishka",
    designation: "IT Specialist",
    company: "NTT Data",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Roushan’s expertise in IAM and PAM with CyberArk and BeyondTrust helped us strengthen our compliance and access security. A true DevSecOps professional!",
    name: "Rahul Anand",
    designation: "IT Manager",
    company: "Taj Hotel, Patna",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
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
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
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
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
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
