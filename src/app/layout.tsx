import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janith Mahanama",
  description:
    "Janith Chathuranga Mahanama, Computer Science & Engineering, University of Moratuwa. Research in forecasting and explainable AI, full-stack and infra projects.",
};

export const viewport: Viewport = {
  themeColor: "#FBF3E7",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
