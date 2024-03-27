import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Commit generator",
  description: "Create commit messages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactQueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </ReactQueryProvider>
    </html>
  );
}
