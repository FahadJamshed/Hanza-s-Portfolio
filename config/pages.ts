import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Hanza Jamshed's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Hanza Jamshed's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Hanza Jamshed's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Hanza Jamshed.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Hanza Jamshed's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Hanza Jamshed's resume.",
    metadata: {
      title: "Resume",
      description: "Hanza Jamshed's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description: "WordPress and front-end development.",
    metadata: {
      title: "Blogs",
      description:
        "Hanza Jamshed's blog — WordPress and front-end development.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Hanza Jamshed's professional journey and experience timeline.",
    },
  },
};
