import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const generateRandomLocations = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: Math.random().toString(36),
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
  }));
};

export { cn, generateRandomLocations };
