import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateBuilderNumber(): string {
  const randomNum = Math.floor(Math.random() * 246) + 1;
  const padded = String(randomNum).padStart(4, "0");
  return `HHG26-${padded}`;
}

export function formatIssueDate(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  return `${day} ${month} ${year}`;
}

export async function exportCardToPng(
  element: HTMLElement,
  filename: string = "road-to-247-builder-credential.png"
): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    const { toPng } = await import("html-to-image");
    const dataUrl = await toPng(element, {
      quality: 0.98,
      pixelRatio: 2, // Crisp 2x retina output
      cacheBust: true,
      style: {
        transform: "scale(1)",
        transformOrigin: "top left",
      },
    });

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Error exporting card to PNG:", error);
    throw error;
  }
}

export function openXShareIntent(builderNumber: string): void {
  if (typeof window === "undefined") return;
  const tweetText = `Just created my Builder Journey Credential for Hacker House Goa 2026.

The Road to 247 begins here.

#FrameInGoa`;

  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export async function copyCardTextToClipboard(builderNumber: string): Promise<boolean> {
  if (typeof window === "undefined" || !navigator.clipboard) return false;
  try {
    const shareText = `Builder Journey Credential [${builderNumber}] for Hacker House Goa 2026. The Road to 247 begins here. #FrameInGoa`;
    await navigator.clipboard.writeText(shareText);
    return true;
  } catch (e) {
    console.warn("Clipboard write failed:", e);
    return false;
  }
}
