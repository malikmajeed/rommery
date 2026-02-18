import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes with proper override precedence.
 * Later arguments override earlier ones for conflicting utilities.
 */
export function cn(...inputs) {
  return twMerge(inputs.filter(Boolean));
}
