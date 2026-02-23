"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useSection } from "@/components/theme-provider"

interface CollapsibleSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function CollapsibleSection({ id, title, children, className }: CollapsibleSectionProps) {
  const { expandedSection, setExpandedSection } = useSection();
  const isExpanded = expandedSection === id;

  const toggleSection = () => {
    if (isExpanded) {
      setExpandedSection(null);
    } else {
      setExpandedSection(id);
    }
  };

  return (
    <section id={id} className={cn("transition-all duration-300", className)}>
      <button
        onClick={toggleSection}
        className="w-full text-left p-4 hover:bg-accent/50 rounded-lg transition-colors flex items-center justify-between group"
      >
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <span className={cn(
          "text-2xl transition-transform duration-300",
          isExpanded ? "rotate-180" : "rotate-0"
        )}>
          ▼
        </span>
      </button>

      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 pb-4">
          {children}
        </div>
      </div>
    </section>
  );
}
