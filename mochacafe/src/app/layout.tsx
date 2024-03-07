import type { Metadata } from "next";
import "./globals.css";
import { Saira } from "next/font/google";
import { Header } from "@/components/Header";
import { FilterContextProvider } from "@/contexts/FilterContext";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mocha Caffe",
  description: "Let's share coffe time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
