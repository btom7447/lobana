import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Lobana International Ltd",
  description:
    "Lobana is a Nigerian-based multi-sector company specializing in real estate, trade & commerce, agriculture, and strategic investments. Founded in 2024, we build bridges between opportunities and communities — delivering sustainable growth, modern solutions, and long-term value across industries.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
      <Footer />
    </html>
  );
}
