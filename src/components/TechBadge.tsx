import React from "react";

interface TechBadgeProps {
  text: string;
}

export default function TechBadge({ text }: TechBadgeProps) {
  return (
    <span className="px-2.5 py-1 text-[11px] bg-slate-950/80 border border-slate-850 rounded-md text-slate-300 font-medium font-sans">
      {text}
    </span>
  );
}
