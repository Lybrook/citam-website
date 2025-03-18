import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names using clsx and optimizes them with tailwind-merge
 * This utility function merges multiple class names together while avoiding Tailwind CSS conflicts
 * 
 * @param {...string} inputs - Class names or conditional class names
 * @returns {string} - Merged and optimized class names string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}