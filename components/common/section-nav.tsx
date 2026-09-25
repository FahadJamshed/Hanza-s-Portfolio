"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Introduction" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "industries", label: "Industries" },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-42% 0px -42%", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
      aria-label="Homepage sections"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            className="group flex h-4 w-4 items-center justify-center rounded-full"
            onClick={() => scrollToSection(section.id)}
            aria-label={`Go to ${section.label}`}
            aria-current={isActive ? "location" : undefined}
          >
            <span
              className={`block rounded-full border transition-all duration-200 ${
                isActive
                  ? "h-2 w-2 border-foreground bg-foreground shadow-[0_0_0_2px_hsl(var(--background)/0.8)]"
                  : "h-1.5 w-1.5 bg-muted-foreground/50 group-hover:h-2 group-hover:w-2 group-hover:bg-foreground"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}