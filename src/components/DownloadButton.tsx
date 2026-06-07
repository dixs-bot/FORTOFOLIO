import React from "react";
import { Download } from "lucide-react";
import { RESUME_DOWNLOAD_URL } from "@/lib/constants";

interface DownloadButtonProps {
  label?: string;
  className?: string;
}

export default function DownloadButton({ label = "Download CV / Resume", className = "" }: DownloadButtonProps) {
  return (
    <a
      href={RESUME_DOWNLOAD_URL}
      download="Alexander_Wright_CV.pdf"
      className={`px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium rounded-lg transition-colors text-center flex items-center justify-center gap-2 text-sm ${className}`}
    >
      {label}
      <Download size={16} />
    </a>
  );
}
