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
    abttt,
    django,
    insa,
    coop,
    mint,
    debo,
    ab,
    arif,
    me, 
    bilicta
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
      title: "Full Stack Development",
      icon: web,
    },
    {
      title: "API/AI Integration",
      icon: mobile,
    },
    {
      title: "AI Development",
      icon: backend,
    },
    {
      title: "Automation Worklow Architect",
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
        "Identifing User requirement and tring to figureout the solution how to implement efficiently",
        "Start with identify the project goal, designing UI, identifying methdodolgy, implementing and maintenance",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "IT Support",
      company_name: "Cooperative Bank of Oromia ",
      icon: coop,
      iconBg: "#383E56",
      date: "Mar 2024 - Aug 2024",
      points: [
        "Documenting and resolving user issues through ticketing systems..",
        "Troubleshooting hardware and software problems.",
        "Operating system installation and updates and also Experience with Windows OS, Mac OS, and or Linux OS",
        
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "INSA ",
      icon: insa,
      iconBg: "#383E56",
      date: "Jul 2024 - Sept 2025",
      points: [
        
        "Developer as intradependent FullStack Engineer.",
        "Work on project start from design using figma, implement reactjs, webpack encore,etc and integrate with backend nginx, symfony, MySQL, etc",
        "Collab With other developers in which to optime code, improve product and follow the best way",
        "Optimizing existing codes with best practice and ensuring its resource and time efficienct"
      ],
    },
    {
      title: "Laravel Developer",
      company_name: "Arifget ",
      icon: arif,
      iconBg: "#383E56",
      date: "Dec 2024 - Aug 2025",
      points: [
        
        "Developer as Notiication integrtor in team  of Arifget.",
        "Work on arifget.com projects which is frelancing and education Ethiopian based platorm  ",
        "Collab With other developers in which to optime code, improve product and follow the best way",
      ],
    },
    {
      title: "AI Agent and Chatbot development",
      company_name: "Self-employed ",
      icon: me,
      iconBg: "#383E56",
      date: "Dec 2025 - Prent",
      points: [
        "Developer as independent contrctor",
        "Work on varieties project, that improve business workflow, agent that work independent on  behalf of you, and supportive AI chatbot with multilingual capability",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Bilicta AI",
      description:
        "Bilicta AI is multilingual AI chatbot that I built, to solve language barrier to Ethiopia market to access AI. so it can handle general question and on domain or private data as well.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Langchain",
          color: "pink-text-gradient",
        },{
          name: "FastAPI",
          color: "yellow-text-gradient",
        },
      ],
      image: bilicta,
      source_code_link: "https://github.com/wellAbebe/",
      website_link: "https://bilicta-ai.vercel.app/",
    },
    
    {
      name: "Conference Managing System",
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
      image: debo,
      source_code_link: "https://github.com/wellAbebe/debo-admin",
      website_link: "https://github.com/wellAbebe/debo-admin",
    },

    
    {
      name: "Yenead",
      description: "An engaging landing page for an advertising company, designed to showcase its services, highlight its expertise, and seamlessly connect potential clients with the business.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css/html",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "gray-text-gradient",
        },
      ],
      image: ab,
      source_code_link: "https:yenead.com",
      website_link: "https://yenead.com",
    }, 
  ];
  
  export { services, technologies, experiences, projects };
  

