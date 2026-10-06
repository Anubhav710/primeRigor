"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        className: "font-sans text-xs rounded-md shadow-lg border border-neutral-200",
      }}
    />
  );
}
