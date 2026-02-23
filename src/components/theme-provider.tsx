"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import React, { createContext, useContext, useState } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

interface SectionContextType {
  expandedSection: string | null;
  setExpandedSection: (id: string | null) => void;
}

const SectionContext = createContext<SectionContextType>({
  expandedSection: null,
  setExpandedSection: () => {},
});

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  return (
    <SectionContext.Provider value={{ expandedSection, setExpandedSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  return useContext(SectionContext);
}
