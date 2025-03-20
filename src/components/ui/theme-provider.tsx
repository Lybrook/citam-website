"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, Attribute } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  attribute?: Attribute | Attribute[];
  defaultTheme?: string;
  enableSystem?: boolean;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"


      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
