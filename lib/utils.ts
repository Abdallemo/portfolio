import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function openInNewTab(imageSrc: string) {
  try {
    const response = await fetch(imageSrc);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const imageBlob = await response.blob();

    const blobUrl = URL.createObjectURL(imageBlob);

    if (typeof window !== "undefined") {
      window.open(blobUrl, "_blank");
    }
  } catch (error) {
    console.error("Error creating Blob URL and opening image:", error);
  }
}
export async function openImage(imageSrc: string) {
  try {
    const response = await fetch(imageSrc);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const imageBlob = await response.blob();

    const blobUrl = URL.createObjectURL(imageBlob);

    return blobUrl
  } catch (error) {
    console.error("Error creating Blob URL and opening image:", error);
    return ""
  }
}
