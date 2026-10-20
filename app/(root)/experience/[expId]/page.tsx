import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChipContainer from "@/components/ui/chip-container";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";

interface ExperienceDetailPageProps {
  params: Promise<{
    expId: string;
  }>;
}

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
};

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${experience.position} at ${experience.company} | Experience`,
    description: `Detailed information about my role as ${experience.position} at ${experience.company}.`,
    alternates: {
      canonical: `${siteConfig.url}/experience/${expId}`,
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    redirect("/experience");
  }

  const tabItems = [
    {
      value: "summary",
      label: "Summary",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Role Summary
            </h3>
            <ul className="experience-points space-y-4">
              {experience.description.map((desc, idx) => (
                <li
                  key={idx}
                  className="text-[0.97rem] leading-7 flex items-start gap-3.5 text-foreground/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "achievements",
      label: "Achievements",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Key Achievements
            </h3>
            <ul className="experience-points space-y-4">
              {experience.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-[0.97rem] leading-7 flex items-start gap-3.5 text-foreground/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "skills",
      label: "Skills",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Technologies & Skills
            </h3>
            <ChipContainer textArr={experience.skills} />
            <p className="mt-4 text-sm text-muted-foreground">
              These are the primary technologies and skills utilized during my
              time at {experience.company}.
            </p>
          </div>
        </AnimatedSection>
      ),
    },
  ];

  return (
    <ClientPageWrapper>
      <div className="container max-w-5xl mx-auto py-8 md:py-12 px-4">
        <AnimatedSection className="mb-8">
          <Button variant="ghost" size="sm" className="group -ml-3 text-muted-foreground hover:text-foreground" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="experience-detail overflow-hidden rounded-2xl border bg-card transition-all duration-300">
            <CardHeader className="p-6 sm:p-9 md:p-10">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="flex items-start gap-5">
                    {experience.logo && (
                      <div className="w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] rounded-xl border border-border/70 overflow-hidden bg-white flex-shrink-0 shadow-sm">
                        <Image
                          src={experience.logo}
                          alt={experience.company}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain p-2.5"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Professional experience</p>
                      <h1 className="experience-detail-title max-w-3xl text-2xl sm:text-3xl md:text-[2.65rem] tracking-tight font-semibold mb-4">
                        {experience.position}
                      </h1>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-base sm:text-lg font-medium text-foreground">
                          {experience.company}
                        </span>
                        {experience.companyUrl && (
                          <a
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Icons.externalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center sm:justify-end">
                    <span className="inline-flex items-center px-3.5 py-2 rounded-full text-xs font-medium bg-muted/70 text-muted-foreground border border-border/70 whitespace-nowrap">
                      {getDurationText(
                        experience.startDate,
                        experience.endDate
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-7 sm:px-9 sm:pb-9 md:px-10 md:pb-10">
              <ResponsiveTabs items={tabItems} defaultValue="summary" />
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>
    </ClientPageWrapper>
  );
}
