"use client";
import * as React from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle theme"
      className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-ring"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "☀️" : "🌙"}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}