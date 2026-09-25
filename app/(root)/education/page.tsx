import {
  GraduationCap,
} from "lucide-react";

import PageContainer from "@/components/common/page-container";

export const metadata = {
  title: "Education & Certifications",
  description: "Hanza Jamshed’s education and professional certifications.",
};
const education = [
  ["BS Computer Science (Hons)", "Lahore College for Women University"],
  ["HSC — ICS", "Computer Science"],
  ["SSC", "Science"],
];
const certifications = [
  ["Claude Code 101 Certificate", "Anthropic", "August 2026"],
  ["Certified WordPress Developer", "Coursera", "August 2026"],
  ["Certified WordPress Developer", "DigiSkills.pk", "February 2024"],
  ["Foundations of Project Management Certificate", "Google", "August 2026"],
  ["Project Management Fundamentals Certificate", "Microsoft", "August 2026"],
  ["Introduction to Project Management Certificate", "IBM", "August 2026"],
  ["PMP Certificate", "Pearson", "August 2026"],
];

export default function EducationPage() {
  return (
    <PageContainer
      title="Education & Certifications"
      description="Computer science foundations and continued professional learning."
    >
      <section className="space-y-5 mb-12">
        <h2 className="font-heading text-2xl">Education</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {education.map(([title, institution]) => (
            <div key={title} className="glass-surface rounded-lg border p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-background/60 text-foreground">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-muted-foreground">{institution}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-5">
        <h2 className="font-heading text-2xl">Certifications</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map(([title, issuer, date]) => {
            return (
              <div key={title + issuer} className="glass-surface rounded-lg border p-6 space-y-3">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-muted-foreground">{issuer}</p>
                <p className="text-sm text-muted-foreground">Issued {date}</p>
              </div>
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}
