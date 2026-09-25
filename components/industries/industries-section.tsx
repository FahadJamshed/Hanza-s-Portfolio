import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { industries } from "@/config/industries";

export function IndustriesSection() {
  return (
    <AnimatedSection
      direction="up"
      className="container my-14 overflow-hidden rounded-2xl border border-border/60 bg-muted/45 px-5 py-8 text-foreground sm:px-8 sm:py-10"
      id="industries"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.5fr] lg:items-center lg:gap-12">
        <div className="space-y-3 text-left lg:pb-2">
        <AnimatedText
          as="p"
          className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Industry experience
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.1}
          className="font-heading text-3xl leading-tight sm:text-4xl"
        >
          Built for the way your industry works.
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="leading-relaxed text-muted-foreground sm:text-lg"
        >
          From regulated platforms to high-growth online businesses, I create
          digital experiences that make complex work feel simple.
        </AnimatedText>
        </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {industries.map((industry) => {
          const Icon = industry.icon;

          return (
            <AnimatedSection
              key={industry.name}
              delay={0.08}
              direction="up"
              className="h-full"
            >
              <article className="glass-surface group flex h-full items-start gap-4 rounded-xl border border-border/60 p-4 transition-colors duration-300 hover:border-primary/35 sm:p-5">
                <div className="min-w-0">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-background/60 text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg">{industry.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </div>
      </div>
    </AnimatedSection>
  );
}
