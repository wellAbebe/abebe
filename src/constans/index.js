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
    vue,
    tailwind,
    laravel,
    mysql,
    git,
    api,
    docker,
    starbucks,
    welcome,
    tripguide,
    abttt,
    django,
  } from "../assets";
  
  export const abebe = {
   icon: abttt
  }

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "API Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Network Engineer",
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
      name: "Vue Js",
      icon: vue,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Djanog",
      icon: django,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "API",
      icon: api,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FullStack Developer",
      company_name: "HU IOT",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Oct 2022 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js, Vue.js, Laravel and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "Sidama Institute Of Technology",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2022 - Jan 2023",
      points: [
        
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Product Ecomerce",
      description:
        "Web-based platform that allows users to view, place and trace Order and manage Products from various Suppliers, providing a convenient and efficient solution for managing hierarcical Agricultural sector users.",
      tags: [
        {
          name: "VueJs",
          color: "blue-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },{
          name: "laravel",
          color: "yellow-text-gradient",
        },
      ],
      image: welcome,
      source_code_link: "https://github.com/wellAbebe/Agritech-E-commerce-Platform",
    },
    {
      name: "Electric Guide",
      description:
        "A comprehensive Electrical service booking platform that allows clients to book for electrician and get electrician, electritian post their works and making appontement.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "css/html",
          color: "pink-text-gradient",
        },
        {
          name: "Sqlite",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "gray-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/wellAbebe/",
    },
  ];
  
  export { services, technologies, experiences, projects };
  

