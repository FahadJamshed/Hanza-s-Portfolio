import type { Metadata } from "next";

import GameHub from "@/components/games/game-hub";
import PageContainer from "@/components/common/page-container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Take a Break",
  description:
    "Take a quick break and play Snake, a classic arcade game by Hanza Jamshed.",
  alternates: { canonical: `${siteConfig.url}/play` },
};

export default function PlayPage() {
  return (
    <PageContainer
      title="Take a Break"
      description="Take a little break with a classic arcade game."
    >
      <GameHub />
    </PageContainer>
  );
}
