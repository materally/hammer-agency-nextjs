import { Poppins } from "next/font/google";

import "./globals.css";
import { Layout } from "./_components/layout/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} antialiased text-white bg-gradient-to-t from-black from-40% via-violet-800 to-violet-200 h-full`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
