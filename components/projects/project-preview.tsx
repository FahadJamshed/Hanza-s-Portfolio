"use client";

import Image from "next/image";
import { useState } from "react";
import { Building2, GraduationCap, HeartPulse, ShoppingBag, AudioLines, Globe2 } from "lucide-react";

const covers = {
  evox: { icon: Building2, label: "Enterprise website", color: "from-indigo-950 to-slate-800" },
  candyspoon: { icon: ShoppingBag, label: "WooCommerce storefront", color: "from-rose-950 to-pink-800" },
  "impresario-studio": { icon: AudioLines, label: "Podcasts & audio", color: "from-violet-950 to-purple-800" },
  neumed: { icon: HeartPulse, label: "Healthcare website", color: "from-teal-950 to-emerald-800" },
  "teeth-and-smile": { icon: HeartPulse, label: "Dental care website", color: "from-sky-950 to-cyan-800" },
  "bss-school": { icon: GraduationCap, label: "Education platform", color: "from-blue-950 to-indigo-800" },
  "bss-lap": { icon: GraduationCap, label: "Student selection platform", color: "from-blue-950 to-indigo-800" },
};

interface ProjectPreviewProps {
  id: string;
  name: string;
  src?: string;
  detail?: boolean;
  imageKind?: "website" | "illustration";
}

export default function ProjectPreview({ id, name, src, detail = false, imageKind = "website" }: ProjectPreviewProps) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const cover = covers[id as keyof typeof covers] ?? { icon: Globe2, label: "Web development", color: "from-slate-950 to-slate-700" };
  const Icon = cover.icon;
  const showImage = src && failedSrc !== src;

  return (
    <div className={`relative w-full overflow-hidden rounded-lg border border-border ${detail ? "aspect-[1440/1000]" : "h-[200px]"}`}>
      {showImage ? (
        <>
        <Image
          src={src}
          alt={`${name} — ${imageKind === "illustration" ? "illustrative project image" : "current website preview"}`}
          fill
          sizes={detail ? "(max-width: 768px) 100vw, 720px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          className="object-cover object-top"
          priority={detail}
          onError={() => setFailedSrc(src)}
        />
        {imageKind === "illustration" && <span className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[10px] tracking-wide text-white">Illustrative image</span>}
        </>
      ) : (
        <div className={`relative flex h-full flex-col justify-between bg-gradient-to-br ${cover.color} p-6 text-white`}>
          <div className="absolute -right-8 -top-10 h-48 w-48 rounded-full border border-white/10" aria-hidden="true" />
          <div className="absolute -right-2 -top-4 h-36 w-36 rounded-full border border-white/10" aria-hidden="true" />
          <div className="relative flex items-start justify-between gap-4">
            <Icon size={32} strokeWidth={1.4} aria-hidden="true" />
            <span className="rounded-full border border-white/20 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/80">Project cover</span>
          </div>
          <div className="relative mt-4">
            <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/70">{cover.label}</p>
            <p className="font-heading text-2xl leading-tight">{name}</p>
            <p className="mt-2 text-[11px] text-white/65">Website preview coming soon</p>
          </div>
        </div>
      )}
    </div>
  );
}
