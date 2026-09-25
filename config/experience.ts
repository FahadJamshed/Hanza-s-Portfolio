import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "axora",
    position: "Senior Front-End / WordPress Developer & Project Coordinator",
    company: "Axora",
    location: "United Kingdom (Remote)",
    startDate: new Date("2026-01-01"),
    endDate: "Present",
    description: [
      "Develop and maintain custom WordPress websites and web applications using HTML5, CSS3, JavaScript and PHP, translating Figma/Adobe XD designs into pixel-perfect, production-ready builds.",
      "Build fully responsive, cross-browser-compatible interfaces through rigorous QA and design fidelity checks.",
      "Own the full project lifecycle: requirements gathering, scoping, deployment and post-launch support.",
      "Run Core Web Vitals audits and technical SEO improvements, including schema markup and page speed optimization.",
      "Handle WordPress migrations and VPS/server configuration, maintaining 99.6% uptime across managed hosting environments.",
      "Lead weekly client milestone meetings and resolve server-side and front-end issues, cutting average resolution time by 37% through proactive monitoring.",
    ],
    achievements: [
      "Develop and maintain custom WordPress websites and web applications using HTML5, CSS3, JavaScript and PHP, translating Figma/Adobe XD designs into pixel-perfect, production-ready builds.",
      "Build fully responsive, cross-browser-compatible interfaces through rigorous QA and design fidelity checks.",
      "Own the full project lifecycle: requirements gathering, scoping, deployment and post-launch support.",
      "Run Core Web Vitals audits and technical SEO improvements, including schema markup and page speed optimization.",
      "Handle WordPress migrations and VPS/server configuration, maintaining 99.6% uptime across managed hosting environments.",
      "Lead weekly client milestone meetings and resolve server-side and front-end issues, cutting average resolution time by 37% through proactive monitoring.",
    ],
    skills: [
      "WordPress",
      "PHP",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Technical SEO",
    ],
  },
  {
    id: "jinnbyte",
    position: "Senior Front-End / WordPress Developer (Team Lead)",
    company: "JinnByte",
    location: "Lahore, Pakistan (On-site)",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2025-12-01"),
    description: [
      "Led enterprise front-end projects delivered by JinnByte for Systems Limited’s clients, including Visionet, AtClose, PartnerLinQ and Evox. Built WordPress websites from Figma/Adobe XD with custom themes, plugins, SVG assets, animations and ACF components.",
      "Led the complete front-end rebuild and revamp when these platforms migrated to Drupal after three years. Collaborated with Systems Limited and client stakeholders and coordinated project delivery.",
      "Directed the end-to-end redesign and rebuild of Systems Limited’s corporate website and acted as the primary development contact in stakeholder meetings.",
      "Delivered 40+ responsive websites and web applications using HTML5, CSS3, JavaScript, PHP, WordPress and Drupal, including custom themes, plugins and WooCommerce solutions with MySQL, REST APIs and ACF.",
      "Mentored and led 5+ front-end developers, lifting sprint velocity by 18% through structured task planning and code reviews.",
      "Improved performance and SEO through page speed optimization, schema markup and Core Web Vitals audits.",
      "Managed hosting and migrations across WP Engine, Plesk, cPanel, Hostinger and Namecheap, with documentation and progress reporting in Asana and Trello.",
    ],
    achievements: [
      "Led enterprise front-end projects delivered by JinnByte for Systems Limited’s clients, including Visionet, AtClose, PartnerLinQ and Evox. Built WordPress websites from Figma/Adobe XD with custom themes, plugins, SVG assets, animations and ACF components.",
      "Led the complete front-end rebuild and revamp when these platforms migrated to Drupal after three years. Collaborated with Systems Limited and client stakeholders and coordinated project delivery.",
      "Directed the end-to-end redesign and rebuild of Systems Limited’s corporate website and acted as the primary development contact in stakeholder meetings.",
      "Delivered 40+ responsive websites and web applications using HTML5, CSS3, JavaScript, PHP, WordPress and Drupal, including custom themes, plugins and WooCommerce solutions with MySQL, REST APIs and ACF.",
      "Mentored and led 5+ front-end developers, lifting sprint velocity by 18% through structured task planning and code reviews.",
      "Improved performance and SEO through page speed optimization, schema markup and Core Web Vitals audits.",
      "Managed hosting and migrations across WP Engine, Plesk, cPanel, Hostinger and Namecheap, with documentation and progress reporting in Asana and Trello.",
    ],
    skills: [
      "WordPress",
      "Drupal 10",
      "WooCommerce",
      "PHP",
      "MySQL",
      "ACF",
      "REST APIs",
    ],
  },
  {
    id: "quentara-sols",
    position: "WordPress Developer",
    company: "Quentara Sols",
    location: "Lahore, Pakistan (On-site)",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2020-09-01"),
    description: [
      "Built and maintained WordPress websites for US-based clients, focusing on WooCommerce storefronts, ACF-driven content and custom theme development.",
      "Coordinated directly with clients on requirements and revisions remotely, ensuring builds matched approved designs and timelines.",
    ],
    achievements: [
      "Built and maintained WordPress websites for US-based clients, focusing on WooCommerce storefronts, ACF-driven content and custom theme development.",
      "Coordinated directly with clients on requirements and revisions remotely, ensuring builds matched approved designs and timelines.",
    ],
    skills: ["WordPress", "WooCommerce", "ACF", "PHP"],
  },
];
