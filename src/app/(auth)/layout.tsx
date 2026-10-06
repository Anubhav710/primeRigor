import React from "react";

export const metadata = {
  title: "Log in to Lummi",
  description: "Sign in to your Lummi account to access your creative assets.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900 antialiased font-sans selection:bg-neutral-800 selection:text-white">
      {children}
    </main>
  );
}
