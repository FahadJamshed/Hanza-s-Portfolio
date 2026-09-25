import {
  Braces,
  Workflow,
  PanelsTopLeft,
  CreditCard,
  Server,
  Gauge,
  ListChecks,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export interface skillsInterface {
  name: string;
  description: string;
  icon: LucideIcon;
  tools: string[];
}

export const skills: skillsInterface[] = [
  {
    name: "Web Development",
    description: "Responsive interfaces, custom animations and consistent experiences across browsers.",
    icon: Braces,
    tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL"],
  },
  {
    name: "WordPress & CMS",
    description: "Custom themes, plugins and pixel-perfect Figma-to-WordPress builds.",
    icon: PanelsTopLeft,
    tools: ["WordPress", "Drupal 10", "WooCommerce", "Elementor Pro", "WPBakery", "ACF", "Custom Post Types"],
  },
  {
    name: "Payments & Commerce",
    description: "Payment integrations and complete checkout experiences for online stores.",
    icon: CreditCard,
    tools: ["Stripe", "PayPal", "WooCommerce Payments"],
  },
  {
    name: "DevOps & Hosting",
    description: "Server migrations, DNS/SSL configuration and zero-downtime deployments.",
    icon: Server,
    tools: ["WP Engine", "cPanel", "Plesk", "Hostinger", "Cloudways", "Namecheap", "VPS"],
  },
  {
    name: "SEO & Performance",
    description: "Faster websites with a strong technical foundation for search visibility.",
    icon: Gauge,
    tools: ["Core Web Vitals", "Schema Markup", "Page Speed", "Technical SEO Audits"],
  },
  {
    name: "Project Management",
    description: "Sprint planning, stakeholder communication, QA oversight and risk mitigation.",
    icon: ListChecks,
    tools: ["Agile / Scrum", "Asana", "Trello", "Jira"],
  },
  {
    name: "Leadership",
    description: "Leading a team of 5+ developers through collaborative delivery and continuous learning.",
    icon: UsersRound,
    tools: ["Code Reviews", "Mentorship", "Technical Documentation"],
  },
  {
    name: "AI & Automation",
    description: "AI-assisted development and connected workflows with automation tools.",
    icon: Workflow,
    tools: ["N8N", "Zapier", "Codex", "Claude", "Cursor", "V0 Code", "Lovable", "Replit", "Google Workspace"],
  },
];

export const skillsUnsorted = skills;
export const featuredSkills = skills.slice(0, 6);
