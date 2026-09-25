import {
  Activity,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Smartphone,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  {
    name: "FinTech & Banking",
    description: "Clear, trustworthy digital experiences for financial products and services.",
    icon: Landmark,
  },
  {
    name: "HealthTech",
    description: "Accessible websites and portals that make healthcare information easier to use.",
    icon: Activity,
  },
  {
    name: "E-commerce & Retail",
    description: "Conversion-focused storefronts with smooth browsing and checkout journeys.",
    icon: ShoppingBag,
  },
  {
    name: "Education & E-learning",
    description: "Engaging learning platforms and content-rich websites built for every screen.",
    icon: GraduationCap,
  },
  {
    name: "SaaS & Technology",
    description: "Sharp product websites and interfaces that turn complex ideas into clarity.",
    icon: Smartphone,
  },
  {
    name: "Corporate & Enterprise",
    description: "Reliable, polished digital platforms for growing teams and established brands.",
    icon: UsersRound,
  },
];
