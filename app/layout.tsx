import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dualweb – nowoczesne strony i aplikacje SaaS",
  description:
    "Tworzymy strony, sklepy e-commerce i aplikacje SaaS dla nowoczesnych biznesów. React, Next.js, Node, Python, PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
