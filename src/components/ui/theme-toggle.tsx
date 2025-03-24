import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      ) : (
        <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      )}
    </Button>
  );
}