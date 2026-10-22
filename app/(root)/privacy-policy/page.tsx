import PageContainer from "@/components/common/page-container";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Hanza Jamshed's portfolio handles website data and privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageContainer
      title="Privacy Policy"
      description="How this portfolio handles information when you visit or contact me."
    >
      <article className="glass-surface space-y-8 rounded-xl border p-6 leading-7 sm:p-8">
        <p className="text-sm text-muted-foreground">Last updated: October 22, 2026</p>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl">Information this site uses</h2>
          <p>
            When you browse this portfolio, the hosting platform and site services may process
            basic technical information needed to deliver and protect the site, such as your
            browser, device, IP address, and the pages requested.
          </p>
          <p>
            This site displays a cookie choice banner. Your choice (accept or reject) is saved
            in your browser&apos;s local storage under <code>cookie-consent</code> so the banner
            does not appear again on every visit. This preference is not itself a browser cookie.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl">Analytics</h2>
          <p>
            The site includes Vercel Analytics and can load Google Analytics when it is
            configured for the deployment. These services may process usage and device data to
            report site performance and visits. The current cookie banner stores your choice,
            but does not control whether analytics scripts load. You can manage cookies and
            local storage through your browser settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl">Contact information</h2>
          <p>
            If you contact me by email, I use the information you send—such as your name, email
            address, phone number, and message—to respond to your inquiry. The contact form is
            currently unavailable. If it is enabled in the future, submitted messages will be
            delivered to my email provider and handled for the purpose of replying to you; they
            are not stored in this website&apos;s database.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl">Sharing and retention</h2>
          <p>
            I do not sell personal information. Site hosting, analytics, and email providers may
            process information to provide their services. Messages sent by email remain in the
            relevant mailboxes until they are deleted under the mailbox owner&apos;s retention
            practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl">Your choices and questions</h2>
          <p>
            You can clear this site&apos;s saved cookie preference and other site data through
            your browser settings. To ask about personal information you have sent or request
            its deletion, contact me at{" "}
            <a className="underline underline-offset-4" href={siteConfig.links.email}>
              {siteConfig.email}
            </a>.
          </p>
        </section>
      </article>
    </PageContainer>
  );
}
