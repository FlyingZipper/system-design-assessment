import { SiteLayout } from "@/layout/SiteLayout";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { instrumentSans } from "./fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ventube",
  description: "The best place to watch videos and to vent about them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={cn(instrumentSans.className)}
      >
        <SiteLayout >
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}
