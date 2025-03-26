import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  // Round to the nearest 0.05
  const roundedPrice = Math.round(price * 20) / 20;

  // Check if it's an integer after rounding
  if (roundedPrice % 1 === 0) {
    // It's a whole number, return as string without decimals
    return roundedPrice.toString();
  } else {
    // It has decimals, format to two decimal places
    return roundedPrice.toFixed(2).toString();
  }
}