import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { CareerStats } from "@/components/common/career-stats";
import { SectionNav } from "@/components/common/section-nav";
import { IndustriesSection } from "@/components/industries/industries-section";
import { TypingText } from "@/components/common/typing-text";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Hanza's Portfolio | Senior Front-End & WordPress Developer",
  },
  description:
    "Hanza Jamshed — Senior Front-End Developer and WordPress Specialist in Lahore, Pakistan. Explore enterprise WordPress projects, experience and skills.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Senior Front-End Developer | WordPress Specialist",
    sameAs: [siteConfig.links.linkedin],
  };

  return (
    <>
      <SectionNav />
      <ClientPageWrapper>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

      <section
        id="home"
        className="mb-0 flex min-h-[calc(100svh-5rem)] items-center py-8 sm:py-10 md:py-16"
      >
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 px-4 text-center sm:px-6">
          <Image
            src={siteConfig.portrait}
            height={800}
            width={800}
            sizes="(max-width: 640px) 60vw, 256px"
            className="animate-[portrait-float_6s_ease-in-out_infinite] bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary motion-reduce:animate-none"
            alt="Hanza Jamshed - Senior Front-End Developer | WordPress Specialist Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hanza Jamshed
          </AnimatedText>
          <TypingText
            className="max-w-[22rem] font-heading text-base sm:max-w-none sm:text-xl md:text-xl lg:text-2xl"
            text={"Senior Front-End Developer\u00a0\u00a0|\u00a0\u00a0WordPress Specialist"}
          />
          <div className="mt-3 max-w-[42rem] px-2 text-center sm:mt-4 sm:px-0">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Senior WordPress Developer and Front-End Specialist with 6+ years
              of experience building enterprise websites across e-commerce,
              healthcare, education and corporate sectors. Currently leading
              full-cycle WordPress development and project coordination at
              Axora.
            </p>
          </div>

          <p className="max-w-[22rem] text-sm leading-relaxed text-muted-foreground sm:max-w-none">
            Lahore, Punjab, Pakistan · 40+ websites delivered · Team lead for 5+
            developers
          </p>
          <div className="mt-8 flex w-full max-w-[30rem] flex-row items-center justify-center gap-3 sm:mt-10 sm:gap-4">
            <AnimatedText delay={0.6} className="flex min-w-0 flex-1 sm:flex-none">
              <Link
                href={"/resume"}
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-14 w-full min-w-0 rounded-xl px-2 transition-transform hover:-translate-y-0.5 sm:w-56 sm:px-6"
                )}
                aria-label="View resume"
              >
                <Icons.post className="w-4 h-4 mr-2" /> Resume
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8} className="flex min-w-0 flex-1 sm:flex-none">
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "h-14 w-full min-w-0 rounded-xl px-2 transition-transform hover:-translate-y-0.5 sm:w-56 sm:px-6"
                )}
                aria-label="Contact Hanza Jamshed"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.scrollDown
              aria-hidden="true"
              className="mt-10 h-10 w-6 animate-bounce text-gray-400 motion-reduce:animate-none"
            />
          </AnimatedText>
        </div>
      </section>
      <CareerStats />
      <AnimatedSection
        direction="up"
        className="container my-14 space-y-6 overflow-hidden rounded-2xl border border-border/60 bg-muted/45 py-10"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
        <IndustriesSection />
      <AnimatedSection
        direction="up"
        className="container my-14 space-y-6 overflow-hidden rounded-2xl border border-border/60 bg-muted/45 py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
        <section
          aria-labelledby="hire-me-title"
          className="container my-14 rounded-2xl bg-muted/45 px-5 py-10 text-foreground sm:px-8 sm:py-14 lg:px-10"
        >
          <div className="grid items-center gap-8 text-center xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-12 xl:text-left">
            <div className="mx-auto w-full max-w-2xl space-y-4 xl:mx-0">
              <h2
                id="hire-me-title"
                className="text-balance font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl md:text-5xl"
              >
                Let’s build your next great website.
              </h2>
            </div>
            <div className="mx-auto grid w-full max-w-[24rem] grid-cols-2 gap-3 xl:max-w-none">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "h-14 w-full min-w-0 rounded-xl px-3 transition-transform hover:-translate-y-0.5 motion-reduce:transform-none sm:px-5")}
              >
                <Icons.contact className="mr-2 h-4 w-4" aria-hidden="true" />
                Contact Me
              </Link>
              <Link
                href="/resume"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 w-full min-w-0 rounded-xl px-3 transition-transform hover:-translate-y-0.5 motion-reduce:transform-none sm:px-5")}
              >
                <Icons.post className="mr-2 h-4 w-4" aria-hidden="true" />
                View Resume
              </Link>
            </div>
          </div>
        </section>
      </ClientPageWrapper>
    </>
  );
}
