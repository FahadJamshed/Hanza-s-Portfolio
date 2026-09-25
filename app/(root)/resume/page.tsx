import { siteConfig } from "@/config/site";
import { redirect } from "next/navigation";
export default function ResumePage() {
  redirect(siteConfig.resume);
}
