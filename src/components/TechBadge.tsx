
import React from "react";

interface TechBadgeProps {
  text: string;
}

export default function TechBadge({ text }: TechBadgeProps) {
  return (
    <span
      className="
        px-3
        py-1
        rounded-full
        bg-blue-50
        border
        border-blue-200
        text-blue-700
        text-xs
        font-medium
        font-sans
        transition-all
        duration-300
        hover:bg-blue-100
        hover:border-blue-300
        hover:scale-105
      "
    >
      {text}
    </span>
  );
}

