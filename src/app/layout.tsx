import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AWS Cloud Practitioner Exam Practice | CLF-C02",
  description:
    "Practice for the AWS Certified Cloud Practitioner (CLF-C02) exam with realistic questions, timed exams, and detailed explanations. Covers all 4 domains.",
  keywords: [
    "AWS",
    "Cloud Practitioner",
    "CLF-C02",
    "exam practice",
    "certification",
    "mock exam",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0E17]">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
