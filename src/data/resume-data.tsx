import Consensys from "../images/logos/Consensys.webp";
import devdao from "../images/logos/devdao.webp";

import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Sushmita R.",
  initials: "SR",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/",

  about:
    "Full Stack Web3 Developer focused on building applications with extra attention to details",
  summary:
    "As a Full Stack Web3 Developer, I have successfully worked on multiple web3 applications. Currently I'm part of the RAD(Rapid Application Development) Contractor Team at Consensys where I work on building full stack dapps using all of the web3 products(MetaMask, Infura, Linea etc) available. I work mostly with Nextjs, TypeScript, React and Solidity. I have over 2 years of experience in building web3 applications. I have a passion for learning new technologies and I'm always looking for new opportunities to learn and grow.",
  avatarUrl: "./avatar.webp",
  personalWebsiteUrl: "https://www.sushh.dev/",
  contact: {
    email: "devmeowy@gmail.com",
    // tel: "+00",

    social: [
      {
        name: "GitHub",
        url: "https://github.com/meowyx",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sushmitaaar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/me256ow",
        icon: XIcon,
      },
    ],
  },

  work: [
    {
      company: "ConsenSys",
      link: "https://consensys.io/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: Consensys,
      start: "2023",
      end: "2024",
      description:
        "As a key member of the Rapid Application Development (RAD) Contracted team, I specialize in building full-stack Web3 applications, having successfully developed and delivered three full-stack DApps, and created two templates. My expertise extends to content creation, with multiple blog posts demonstrating our product use cases. I've also been a judge at the NAVH Hackathon, identifying top creative and functional projects, and served as a mentor and judge at ETHIndia 2023, guiding and evaluating innovative blockchain solutions.",
    },
    {
      company: "Udacity",
      link: "https://www.udacity.com/",
      badges: ["Remote"],
      title: "Instructor",
      start: "2023",
      end: "2024",
      description:
        "Involved in the development of a comprehensive curriculum, ensuring alignment with industry standards and the latest trends. Created engaging and informative educational content, including video lectures, interactive exercises, and quizzes, tailored to facilitate online learning for a diverse audience. Designed and administered assessments to evaluate student progress and provided personalized feedback to encourage academic growth.",
    },

    {
      company: "Developer DAO",
      link: "https://www.developerdao.com/",
      badges: ["Remote"],
      title: "Contributor",
      logo: devdao,
      start: "2021",
      end: "2022",
      description:
        "As the co-founder of D_D Academy and founder of D_D Women, I've actively contributed to advancing education and inclusivity in the tech sector. My leadership was crucial in developing and launching an educational website (academy.developerdao.com), where I crafted content on Solidity Smart Contracts. As an Initiative Lead, I've mentored newcomers to Web3, driving community engagement and emphasizing the importance of diversity and knowledge sharing in the tech community.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Solidity",
    "Smart Contracts",
    "IPFS/Arweave",
  ],
  projects: [
    {
      title: "Form-XChange",
      techStack: [
        "Full Stack Web3 Developer",
        "TypeScript",
        "Next.js",
        "Turborepo",
        "Infura",
        "Linea",
      ],
      description: "A feedback form application on Linea ZKEVM.",
      // logo: ConsultlyLogo,
      link: {
        label: "form-xchange.vercel.app",
        href: "https://github.com/Consensys/Form-XChange",
      },
    },
    {
      title: "Polis",
      techStack: ["Full Stack Web3 Developer", "TypeScript", "Next.js", "IPFS"],
      description:
        "Polis is a DApp Marketplace dedicated to showcasing web3 tools, templates, and boilerplates.",

      link: {
        label: "polis-nine.vercel.app",
        href: "https://github.com/Consensys/polis",
      },
    },
    {
      title: "EventSea",
      techStack: [
        "Full Stack Web3 Developer",
        "TypeScript",
        "Next.js",
        "MetaMask sdk",
        "MetaMask GasAPI",
        "Infura",
        "Linea",
      ],
      description: "Web3 Event Ticketing DApp on Linea",

      link: {
        label: "eventsea-web.vercel.app",
        href: "https://github.com/Consensys/eventsea",
      },
    },
    {
      title: "Next-MetaMask-Template",
      techStack: ["Template", "Next.js", "MetaMask"],
      description:
        "Nextjs + MetaMask + Tailwind + ShadcnUI template for building web3 applications",

      link: {
        label: "Next-MetaMask-Template",
        href: "https://github.com/Consensys/Next-MetaMask-Template",
      },
    },
    {
      title: "GasAPI template",
      techStack: ["Template", "Next.js", "MetaMask GasAPI"],
      description:
        "A Nextjs template with MetaMask GasAPI for building web3 applications",

      link: {
        label: "GasAPI-template",
        href: "https://github.com/Consensys/GasAPI-template",
      },
    },
    {
      title: "sushh.dev",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website built with Next.js and MDX. I also have a blog section where I write about my experiences and learnings.",

      link: {
        label: "sushh.dev",
        href: "https://www.sushh.dev/",
      },
    },
    {
      title: "Developer DAO Academy",
      techStack: ["Public Good", "Next.js", "Solidity", "MDX"],
      description:
        "Developer DAO Academy is an open-source education platform created by the Developer DAO.",

      link: {
        label: "academy",
        href: "https://github.com/Developer-DAO/academy",
      },
    },
    {
      title: "glitch",
      techStack: ["Hackathon Project", "Next.js", "IPFS", "Livepeer"],
      description:
        "Glitch is a decentralized user-friendly video streaming platform with build in tokengated functionalities, where creators and users can interact together with Live and In demand videos.",

      link: {
        label: "Glitch",
        href: "https://glitch-one.vercel.app/",
      },
    },
    {
      title: "Building Blocks",
      techStack: ["Hackathon Project", "Next.js", "Chainlink Price Feeds"],
      description:
        "A Nextjs template with MetaMask GasAPI for building web3 applications",

      link: {
        label: "GasAPI-template",
        href: "https://building-blocks-app.vercel.app/",
      },
    },
  ],

  blogPosts: [
    {
      title: "How to Implement MetaMask SDK with Nextjs",
      description:
        "Learn how to integrate a 'Connect Wallet' button with MetaMask in Next.js. This tutorial covers setup, MetaMask SDK usage, and UI creation with ShadcnUI for blockchain interaction.",
      link: "https://metamask.io/news/developers/how-to-implement-metamask-sdk-with-nextjs/",
      tags: ["Nextjs", "MetaMask SDK"],
    },
    {
      title: "How to Build a Simple Gas Tracker App with Gas API and Nextjs",
      description:
        "Learn how to build a simple gas tracker app leveraging the MetaMask gas API, Next.js and ShadcnUI.",
      link: "https://metamask.io/news/developers/how-to-build-a-simple-gas-tracker-app-with-gas-api-and-nextjs/",
      tags: ["Nextjs", "MetaMask GasAPI"],
    },
    {
      title: "How to Implement the MetaMask Gas API in an Event Ticketing Dapp",
      description:
        "In this blog, we explored implementing the MetaMask Gas API into an existing ticketing dApp built with Next.js and ShadcnUI.",
      link: "https://metamask.io/news/developers/how-to-implement-the-metamask-gas-api-in-an-event-ticketing-dapp/",
      tags: ["Nextjs", "MetaMask GasAPI"],
    },
  ],
} as const;
