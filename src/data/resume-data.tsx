import { ConsultlyLogo, EvercastLogo, ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Pranit Patil",
  initials: "PP",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai/india",
  about: "Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with Javascript, TypeScript, React, Node.js, and MongoDB",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/91155068?s=400&u=d56f9587068c31cfd3f8196071a3fef4836fc563&v=4",
  personalWebsiteUrl: "https://patilpranit.vercel.app/",
  contact: {
    email: "patilpranit3112@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/pranitpatil03",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/patilpranit03/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Patilpranit3112",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Vidyavardhini’s College of Engineering and Technology",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Hubx.ai",
      link: "https://www.hubx.ai/",
      badges: ["Remote"],
      title: "Full Stack Intern",
      logo: ConsultlyLogo,
      start: "Jan 2023",
      end: "July 2023",
      description:
        "Worked on revamping the Point-of-Sale UI module using React and UIkit, enhancing dashboard interfaces in the curation module. Integrated Cashfree payment API and WhatsApp Cloud API for seamless onboarding and critical notifications, and improved email service reliability with Nodemailer API.",
    },
    {
      company: "Tech Cryptors",
      link: "https://techcryptors.com/",
      badges: ["Dahisar, Mumbai"],
      title: "Web Development Intern",
      logo: ParabolLogo,
      start: "Dec 2022",
      end: "Jan 2023",
      description:
        "Worked as a Web Development Intern at Tech Cryptors, designing a chatbot for interactive communication and implementing WordPress pages for services and courses. Created navigation components using HTML, CSS, and JavaScript to enhance user experience and ensure seamless website navigation.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML/CSS",
    "SQL",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "Docker",
  ],
  projects: [
    {
      title: "EpicBlogs",
      techStack: [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Editorjs",
        "firebase",
        "aws s3",
      ],
      description:
        "EpicBlogs is a comprehensive blogging platform that enables users to create, edit, and publish blogs seamlessly. It offers features like user authentication, rich text editing, image uploads, and user profiles. Users can interact with blogs through likes and comments, search for blogs and users, and receive notifications for new interactions. The platform also provides an intuitive blog dashboard for managing authored content and viewing analytics.",
      logo: ParabolLogo,
      link: {
        label: "epicblogs",
        href: "https://epic-blogs.vercel.app/",
      },
      github: "https://github.com/PranitPatil03/modern-blogging-frontend",
    },
    {
      title: "QuickCart",
      techStack: [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "passportjs",
        "stripe",
        "redux-toolkit",
      ],
      description:
        "Developed an e-commerce platform where users can browse products, add items to their cart, and make purchases seamlessly. The platform features user authentication, product search, and a streamlined checkout process to enhance the shopping experience.",
      logo: EvercastLogo,
      link: {
        label: "ecommerce",
        href: "https://e-commerce-gamma-ruddy.vercel.app/",
      },
      github: "https://github.com/PranitPatil03/e-commerce-frontend",
    },
    {
      title: "AI Summarizer",
      techStack: ["JavaScript", "React", "Tailwind CSS", "API"],
      description:
        "AI Summarizer is a platform that allows users to input text and receive concise summaries. The tool is designed to streamline information consumption, making it easier to grasp key points quickly. Users can enter text, and the platform will generate a summarized version, helping to enhance productivity and understanding.",
      logo: EvercastLogo,
      link: {
        label: "ai_summarizer",
        href: "https://ai-summarizer-lime.vercel.app/ ",
      },
      github: "https://github.com/PranitPatil03/ai_summarizer",
    },
    {
      title: "AnimeHub",
      techStack: ["Typescript", "Next", "Tailwind CSS", "API"],
      description:
        "Anime Hub is an interactive platform where users can explore a vast collection of anime series and movies. It provides detailed information about each anime, including summaries, ratings, and genres, making it easy for users to discover and track their favorite anime content.",
      logo: EvercastLogo,
      link: {
        label: "AnimeHub",
        href: "https://nike-website-nu.vercel.app/ ",
      },
      github: "https://github.com/PranitPatil03/AnimeHub",
    },
    {
      title: "Nike Website",
      techStack: ["JavaScript", "React", "Tailwind CSS"],
      description:
        "The Nike Website project is a revamped UI version of Nike's online store. It features an enhanced user interface for browsing and purchasing products, detailed product pages, and improved navigation to provide a seamless shopping experience.",
      logo: EvercastLogo,
      link: {
        label: "nike_website",
        href: "https://nike-website-nu.vercel.app/ ",
      },
      github: "https://github.com/PranitPatil03/nike_website",
    },

    {
      title: "Modern Bank Website",
      techStack: ["JavaScript", "React", "Tailwind CSS"],
      description:
        "The Modern Bank Website project is a revamped UI version of a banking platform designed to enhance user experience. It provides features such as account management, transaction tracking, and financial service accessibility through a modern, user-friendly interface.",
      logo: EvercastLogo,
      link: {
        label: "Modern_Bank_Website",
        href: "https://modern-bank-website-three.vercel.app/",
      },
      github: "https://github.com/PranitPatil03/Modern_Bank_Website",
    },
  ],
} as const;
