import Link from "next/link";
import { Hand } from "lucide-react";

export function FloatingHireButton() {
  return (
    <Link
      href="/contact"
      className="floating-hire-button"
      aria-label="Hire Hanza Jamshed"
    >
      <Hand className="floating-hire-hand" aria-hidden="true" />
      <span>Hire me</span>
    </Link>
  );
}
