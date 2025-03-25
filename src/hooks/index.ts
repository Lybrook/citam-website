"use client"

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

/**
 * Hook to manage scroll state for sticky headers.
 * @returns {boolean} - Whether the page is scrolled.
 */
export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    setScrolled(window.scrollY > 10);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrolled;
};

/**
 * Hook to manage mobile navigation state.
 * @returns {[boolean, () => void]} - State and toggle function for mobile navigation.
 */
export const useMobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return [isMobileNavOpen, toggleMobileNav] as const;
};

/**
 * Hook to get the current pathname in Next.js.
 * @returns {string} - The current pathname.
 */
export const useCurrentPathname = () => {
  return usePathname();
};

/**
 * Hook to manage theme toggling using `next-themes`.
 * @returns {{ resolvedTheme: string, toggleTheme: () => void }} - Theme state and toggle function.
 */
export const useThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return { resolvedTheme, toggleTheme };
};

/**
 * Hook to validate email addresses.
 * @returns {(email: string) => boolean} - Function to validate email.
 */
export const useEmailValidation = () => {
  return useCallback((email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }, []);
};

/**
 * Hook to manage newsletter subscription form state.
 * @returns {object} - State and handlers for the newsletter form.
 */
export const useNewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = useEmailValidation();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        return;
      }

      setIsLoading(true);
      setError("");

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
        setIsSubmitted(true);
        setEmail("");
      } catch {
        setIsLoading(false);
        setError("Failed to subscribe. Please try again.");
      } finally {
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    },
    [email, validateEmail]
  );

  return {
    email,
    setEmail,
    isSubmitted,
    isLoading,
    error,
    handleSubmit,
  };
};