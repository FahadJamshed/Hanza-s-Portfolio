import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import Link from "next/link";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-50 bg-transparent">
        <div className="home-announcement" aria-label="Website services announcement">
          <div className="home-announcement-track">
            {[0, 1, 2, 3].map((copy) => (
              <p className="home-announcement-message" key={copy} aria-hidden={copy > 0}>
                Looking for a modern, SEO-friendly, lightning-fast WordPress website with easy content management? Let’s turn your idea into a high-performing digital experience.
                <Link href="/contact" className="home-announcement-link">
                  Let&apos;s Discuss Your Project <span aria-hidden="true">↗</span>
                </Link>
                <span className="home-announcement-spacer" aria-hidden="true" />
              </p>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="relative flex h-20 items-center justify-between py-6">
            <MainNav
              items={routesConfig.mainNav}
              mobileActions={<ModeToggle />}
            />
          </div>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
