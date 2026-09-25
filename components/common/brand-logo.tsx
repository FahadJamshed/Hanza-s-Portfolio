import { siteConfig } from "@/config/site";

export function BrandLogo() {
  return (
    <span
      role="img"
      aria-label={`${siteConfig.authorName} logo`}
      className="block h-5 w-[150px] shrink-0 bg-current sm:h-6 sm:w-[180px] md:w-[210px]"
      style={{
        maskImage: `url(${siteConfig.logo})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: `url(${siteConfig.logo})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
