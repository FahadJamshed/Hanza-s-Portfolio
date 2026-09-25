import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  deliveredVia?: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate?: Date;
  endDate?: Date;
  companyLogoImg?: string;
  imageKind?: "website" | "illustration";
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "systems-limited",
    deliveredVia: "JinnByte",
    companyName: "Systems Limited",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Led the end-to-end redesign and development of Systems Limited’s corporate website, translating Figma designs into a responsive WordPress solution with custom functionality, performance optimization and scalable architecture.",
    techStack: ["WordPress", "Figma", "PHP"],
    descriptionDetails: {
      paragraphs: [
        "Led the end-to-end redesign and development of Systems Limited’s corporate website, translating Figma designs into a responsive WordPress solution with custom functionality, performance optimization and scalable architecture.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
    websiteLink: "https://www.systemsltd.com",
    companyLogoImg: "/projects/hanza/systems-limited.jpg",
  },
  {
    id: "atclose",
    deliveredVia: "JinnByte",
    companyName: "AtClose",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Enterprise WordPress platform for real estate closing, delivered by JinnByte for Systems Limited. Developed ACF-managed content, Custom Post Types, REST API integrations, scroll-based animations and downloadable case studies. Later contributed to the WordPress-to-Drupal migration and revamp.",
    techStack: ["WordPress", "Drupal 10", "ACF", "REST APIs"],
    descriptionDetails: {
      paragraphs: [
        "Enterprise WordPress platform for real estate closing, delivered by JinnByte for Systems Limited. Developed ACF-managed content, Custom Post Types, REST API integrations, scroll-based animations and downloadable case studies. Later contributed to the WordPress-to-Drupal migration and revamp.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
    websiteLink: "https://www.atclose.com",
    companyLogoImg: "/projects/hanza/atclose.jpg",
  },
  {
    id: "visionet",
    deliveredVia: "JinnByte",
    companyName: "Visionet",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Drupal"],
    shortDescription:
      "Enterprise website for AI-driven retail solutions, delivered by JinnByte for Systems Limited. Built a responsive WordPress platform from Adobe XD designs and later rebuilt it on Drupal during platform migration and modernization.",
    techStack: ["WordPress", "Drupal 10", "HTML 5", "CSS 3"],
    descriptionDetails: {
      paragraphs: [
        "Enterprise website for AI-driven retail solutions, delivered by JinnByte for Systems Limited. Built a responsive WordPress platform from Adobe XD designs and later rebuilt it on Drupal during platform migration and modernization.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
    websiteLink: "https://www.visionet.com",
    companyLogoImg: "/projects/hanza/visionet.jpg",
  },
  {
    id: "partnerlinq",
    deliveredVia: "JinnByte",
    companyName: "PartnerLinQ",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Drupal"],
    shortDescription:
      "Enterprise supply chain website delivered by JinnByte for Systems Limited. Built a responsive WordPress platform from Adobe XD designs and later rebuilt it on Drupal during platform migration and modernization.",
    techStack: ["WordPress", "Drupal 10", "HTML 5", "CSS 3"],
    descriptionDetails: {
      paragraphs: [
        "Enterprise supply chain website delivered by JinnByte for Systems Limited. Built a responsive WordPress platform from Adobe XD designs and later rebuilt it on Drupal during platform migration and modernization.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
    websiteLink: "https://www.partnerlinq.com",
    companyLogoImg: "/projects/hanza/partnerlinq.jpg",
  },
  {
    id: "evox",
    deliveredVia: "JinnByte",
    companyLogoImg: "/projects/hanza/evox.jpg",
    imageKind: "illustration",
    companyName: "Evox",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Enterprise WordPress website delivered by JinnByte for Systems Limited, featuring custom UI implementation from Adobe XD, SVG assets and custom plugin development; later enhanced during the Drupal migration.",
    techStack: ["WordPress", "Drupal 10", "PHP"],
    descriptionDetails: {
      paragraphs: [
        "Enterprise WordPress website delivered by JinnByte for Systems Limited, featuring custom UI implementation from Adobe XD, SVG assets and custom plugin development; later enhanced during the Drupal migration.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
  },
  {
    id: "bss-school",
    deliveredVia: "JinnByte",
    companyLogoImg: "/projects/hanza/bss-school.jpg",
    imageKind: "website",
    websiteLink: "https://www.beaconhouse.net",
    companyName: "BSS School",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Dynamic educational platform with custom post types for 10+ branches, ACF-managed content, video banners and animated counters.",
    techStack: ["WordPress", "ACF", "Javascript"],
    descriptionDetails: {
      paragraphs: [
        "Dynamic educational platform with custom post types for 10+ branches, ACF-managed content, video banners and animated counters.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
  },
  {
    id: "candyspoon",
    deliveredVia: "JinnByte",
    companyLogoImg: "/projects/hanza/candyspoon-retail.jpg",
    imageKind: "illustration",
    companyName: "CandySpoon",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Full WooCommerce build from Figma with custom product templates, lightbox, side cart, wishlist, advanced search and complete checkout flows.",
    techStack: ["WordPress", "WooCommerce", "Figma"],
    descriptionDetails: {
      paragraphs: [
        "Full WooCommerce build from Figma with custom product templates, lightbox, side cart, wishlist, advanced search and complete checkout flows.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
  },
  {
    id: "merium-pervaiz",
    deliveredVia: "JinnByte",
    companyLogoImg: "/projects/hanza/merium-pervaiz-clean.jpg",
    imageKind: "website",
    websiteLink: "https://meriumpervaiz.com",
    companyName: "Merium Pervaiz",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Full WooCommerce build from Figma with custom product templates, lightbox, side cart, wishlist, advanced search and complete checkout flows.",
    techStack: ["WordPress", "WooCommerce", "Figma"],
    descriptionDetails: {
      paragraphs: [
        "Full WooCommerce build from Figma with custom product templates, lightbox, side cart, wishlist, advanced search and complete checkout flows.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
  },
  {
    id: "bss-lap",
    deliveredVia: "JinnByte",
    companyLogoImg: "/projects/hanza/bss-lap.jpg",
    imageKind: "website",
    websiteLink: "https://lap.beaconhouse.net",
    companyName: "BSS LAP",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Custom WordPress student selection plugin with a mass-email system, automated account creation and dynamic branch modules.",
    techStack: ["WordPress", "PHP"],
    descriptionDetails: {
      paragraphs: [
        "Custom WordPress student selection plugin with a mass-email system, automated account creation and dynamic branch modules.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
  },
  {
    id: "impresario-studio",
    deliveredVia: "JinnByte",
    companyLogoImg: "/projects/hanza/impresario-studio.jpg",
    imageKind: "illustration",
    companyName: "Impresario Studio",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Highly interactive WordPress site with Apple Podcasts API integration, a custom audio player, lightbox gallery and file-upload contact forms.",
    techStack: ["WordPress", "REST APIs", "Javascript"],
    descriptionDetails: {
      paragraphs: [
        "Highly interactive WordPress site with Apple Podcasts API integration, a custom audio player, lightbox gallery and file-upload contact forms.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
  },
  {
    id: "clc-online-learning",
    deliveredVia: "JinnByte",
    companyLogoImg: "/projects/hanza/clc-online-learning.jpg",
    imageKind: "website",
    websiteLink: "https://clconlinelearning.co.uk",
    companyName: "CLC Online Learning",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Figma-to-code responsive static learning platform with user registration, video lectures and knowledge resource access using HTML, CSS and JavaScript.",
    techStack: ["HTML 5", "CSS 3", "Javascript", "Figma"],
    descriptionDetails: {
      paragraphs: [
        "Figma-to-code responsive static learning platform with user registration, video lectures and knowledge resource access using HTML, CSS and JavaScript.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
  },
  {
    id: "neumed",
    deliveredVia: "JinnByte",
    companyLogoImg: "/projects/hanza/neumed.jpg",
    imageKind: "illustration",
    companyName: "NeuMed",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Healthcare website with video banners, before/after sliders, pop-ups, booking forms and Google Maps integration.",
    techStack: ["WordPress", "Javascript"],
    descriptionDetails: {
      paragraphs: [
        "Healthcare website with video banners, before/after sliders, pop-ups, booking forms and Google Maps integration.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
  },
  {
    id: "teeth-and-smile",
    deliveredVia: "JinnByte",
    companyLogoImg: "/projects/hanza/teeth-and-smile.jpg",
    imageKind: "illustration",
    companyName: "Teeth & Smile",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Healthcare website with video banners, before/after sliders, pop-ups, booking forms and Google Maps integration.",
    techStack: ["WordPress", "Javascript"],
    descriptionDetails: {
      paragraphs: [
        "Healthcare website with video banners, before/after sliders, pop-ups, booking forms and Google Maps integration.",
      ],
      bullets: [],
    },
    pagesInfoArr: [],
  },
];
export const featuredProjects = Projects.slice(0, 3);
