import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Highland Mycota · APAC Research Database",
  description:
    "A peer-review database of highland mushroom research from China, Taiwan, South Korea, India, and Japan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="paper-texture min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
