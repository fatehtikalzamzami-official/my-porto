import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Fateh Tikal Zamzami | Portofolio",
  description: "Portofolio software engineer: web, mobile, dan Virtual Reality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
