import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container relative mt-10 flex flex-col items-center justify-center gap-3 py-10 md:h-28">
        <div className="flex items-center justify-center gap-2">
          {SocialLinks.map((item, ind) => (
            <CustomTooltip icon={item.icon} text={item.username} key={ind}>
              <Link
                href={item.link}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  }),
                  "h-10 w-10 p-2"
                )}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
        <div className="relative flex w-full items-center justify-between">
          <nav aria-label="Footer links" className="flex items-center justify-start gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Privacy Policy
            </Link>
          </nav>
          <Link
            href="/sitemap.xml"
            className="absolute right-0 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Sitemap
          </Link>
          <p className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-sm text-muted-foreground">
            © 2026 Hanza Jamshed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
