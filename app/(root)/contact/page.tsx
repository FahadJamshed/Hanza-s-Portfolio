import PageContainer from "@/components/common/page-container";
import { siteConfig } from "@/config/site";
export const metadata = {
  title: "Contact",
  description: "Contact Hanza Jamshed for WordPress and front-end development.",
};
export default function ContactPage() {
  return (
    <PageContainer
      title="Let’s work together"
      description="Get in touch about WordPress, WooCommerce and front-end development."
    >
      <section className="glass-surface mb-6 rounded-xl border p-6 sm:p-8">
        <h2 className="font-heading text-2xl sm:text-3xl">
          Want to Start a Project? Let’s Discuss.
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          Book a <strong className="text-foreground">30-minute consultation call for just $20</strong> and let’s discuss your project, goals, and requirements.
        </p>
      </section>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="glass-surface rounded-lg border p-8 space-y-5">
          <h2 className="font-heading text-2xl">Hanza Jamshed</h2>
          <p>{siteConfig.jobTitle}</p>
          <p className="text-muted-foreground">{siteConfig.location}</p>
          <a
            className="block underline underline-offset-4 break-all"
            href={siteConfig.links.email}
          >
            {siteConfig.email}
          </a>
          <a
            className="block underline underline-offset-4"
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn ↗
          </a>
          <a
            className="block underline underline-offset-4"
            href={siteConfig.links.fiverr}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire me on Fiverr ↗
          </a>
        </div>
        <div className="glass-surface rounded-lg border p-8 space-y-5">
          <h2 className="font-heading text-2xl">From design to deployment</h2>
          <p className="text-muted-foreground">
            Custom WordPress themes and plugins, Figma-to-WordPress builds,
            WooCommerce solutions, performance optimization and ongoing
            technical support.
          </p>
          <a
            className="inline-block rounded-md bg-primary text-primary-foreground px-5 py-3"
            href={siteConfig.links.email}
          >
            Email Hanza
          </a>
          <a
            className="block underline underline-offset-4"
            href={siteConfig.resume}
            download
          >
            Download my CV
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
