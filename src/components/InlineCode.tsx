import type { ReactNode } from "react";

const variants = {
  neutral: "bg-gray-100",
  accent: "bg-indigo-100",
  warning: "bg-amber-100",
};

interface InlineCodeProps {
  children: ReactNode;
  variant?: keyof typeof variants;
}

export function InlineCode({ children, variant = "neutral" }: InlineCodeProps) {
  return <code className={`font-mono text-xs px-1 rounded ${variants[variant]}`}>{children}</code>;
}

InlineCode.displayname = "InlineCode";
