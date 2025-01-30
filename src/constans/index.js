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
    welcome,
    tripguide,
    abttt,
    django,
    insa,
    coop,
    mint
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
      title: "Python Automation",
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
      title: "FullStack Developer Intern",
      company_name: "Sidama Institute Of Technology",
      icon: mint,
      iconBg: "#383E56",
      date: "Jun 2022 - Jan 2023",
      points: [
        
        "UI/UX design",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Junior Backend Developer",
      company_name: "CoopBank ",
      icon: coop,
      iconBg: "#383E56",
      date: "Apr 2024 - Aug 2024",
      points: [
        "Developing and maintaining web applications using Django, Laravel and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Contributing in responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "INSA + Part Time Freelance",
      icon: insa,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        
        "Developer as intradepent FullStack Engineer.",
        "Work on project start from design using figma, implement reactjs, webpack encore,etc and integrate with backend nginx, symfony, MySQL, etc",
        "Collab With other developers in which to optime code, improve product and follow the best way",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Ecomerce Distribution System",
      description:
        "Web-based/App platform that allows users to view, place and trace Order and manage Products from Suppliers,  and managing hierarcical Agricultural sector users.",
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
        "A comprehensive Electrical service booking platform that allows clients to book for electrician and get electrician, electritian post their works and making appointement.",
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
          color: "blue-text-gradient",
        },
        {
          name: "symfony",
          color: "gray-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/wellAbebe/",
    },  
    {
      name: "Conference Panel System",
      description:
        "Admin Dashboard that enable User/Admin To manage conference, participant and hosting server. It's multi level acess granted based on their priviledge.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        }, 
        {
          name: "webpack",
          color: "blue-text-gradient",
        },
        {
          name: "symfony",
          color: "yellow-text-gradient",
        },
      ],
      // image: welcome,
      // source_code_link: "https://github.com/wellAbebe/Agritech-E-commerce-Platform",
    },
  ];
  
  export { services, technologies, experiences, projects };
  

