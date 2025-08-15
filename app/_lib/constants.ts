import { m } from "framer-motion";

export const techCardsItems = [
  {
    name: "Figma",
    description: "Design Tool",
    imageUrl: "/imgs/logos/figma-logo.svg",
    bgColor: "bg-[#0ACF83]/20",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/imgs/logos/nextjs.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "Supabase",
    description: "Backend tool",
    imageUrl: "/imgs/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    name: "NodeJS",
    description: "Backend",
    imageUrl: "/imgs/logos/node-js.svg",
    bgColor: "bg-[#689F63]/30",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#599636]/30",
  },
  // {
  //   name: "Prisma",
  //   description: "ORM",
  //   imageUrl: "/imgs/logos/prisma.svg",
  //   bgColor: "bg-[#0C344B]/20",
  // },
  // {
  //   name: "PostgreSQL",
  //   description: "OR database system",
  //   imageUrl: "/imgs/logos/postgresql.svg",
  //   bgColor: "bg-[#336791]/20",
  // },
  {
    name: "Vue",
    description: "JavaScript framework",
    imageUrl: "/imgs/logos/vue.svg",
    bgColor: "bg-[#3fb984]/20",
  },
];

export const portfolioProjects = [
  {
    id: "Quizora",
    heading: "Quizora",
    subheading: "a modern quiz website",
    description:
      "A modern website with all Quiz functionalities. It includes features like Quiz creation, Quiz taking, Quiz results, Quiz management... The application is developed with python + flask for frontend part, and firebase as backend.",
    imageUrl: "/imgs/projects/portfolio-mockup2.png",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Flask",
      "Python",
    ],
    liveDemoUrl: "Yet to be deployed",
    sourceCodeUrl: "https://github.com/Dhruv-200/Quizora",
  },
  {
    id: "Speech-to-text",
    heading: "Speech-to-text",
    subheading: "application for converting speech to text.",
    description:
      "A webstie for converting speech to text using python and flask framework.",
    imageUrl: "/imgs/projects/portfolio-mockup4.jpg",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
    ],
    liveDemoUrl: "Yet to be deployed",
    sourceCodeUrl: "https://github.com/Dhruv-200/Speech-to-text",
  },
  {
    id: "Netra",
    heading: "Netra",
    subheading: "An iot based smart glasses",
    description:
      "Netra is an iot based smart glasses. It includes features like voice control, gesture control, and more. The application is developed with Raspberry Pi, Halio-8L, and more. Its a part of my departmental project given by the college before developed by seniors.",
    imageUrl: "/imgs/projects/portfolio-mockup1.png",
    techStack: [
      "Python",
      "Raspberry Pi",
      "Halio-8L",
      "Arduino",
      "ESP32",
      "ESP8266",
    ],
    liveDemoUrl: "/resume/Netra.pdf",
    sourceCodeUrl: "https://github.com/Dhruv-200/Weather-app",
  },
  {
    id: "Typing-speed-test",
    heading: "Typing-speed-test",
    subheading: "a typing speed test application",
    description:
      "A web application designed to test your typing speed. It includes features like typing test, typing speed test, typing accuracy test, typing practice, typing test results, typing test management... The application is developed with python + flask for frontend part.",
    imageUrl: "/imgs/projects/portfolio-mockup3.jpg",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
    ],
    liveDemoUrl: "https://typing-speed-test-red.vercel.app/",
    sourceCodeUrl: "https://github.com/Dhruv-200/Typing-speed-Test",
  },
];



export const mainNavigationLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "#work",
    label: "Work",
  },
  {
    url: "#about",
    label: "About",
  },
  {
    url: "#contact",
    label: "Contact",
  },
];

export const socialLinks = [
  {
    url: "https://www.linkedin.com/in/dhruv-navadiya/",
    label: "LinkedIn",
  },
  {
    url: "https://github.com/Dhruv-200",
    label: "Github",
  },
];
