import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <article
          key={skill.name}
          className="glass-surface group relative flex h-full flex-col rounded-2xl border border-border/70 p-6 transition-colors duration-200 hover:border-foreground/30 hover:bg-muted/30 sm:p-7"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-muted/50 text-foreground transition-colors duration-200 group-hover:bg-background">
            <skill.icon
              size={28}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
          <h3 className="font-heading text-xl tracking-tight">{skill.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {skill.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5" aria-label={`${skill.name} tools and capabilities`}>
            {skill.tools.map((tool) => (
              <li key={tool} className="rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-xs leading-5 text-foreground/80">
                {tool}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
