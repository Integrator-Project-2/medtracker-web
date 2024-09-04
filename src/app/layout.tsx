import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@radix-ui/themes/styles.css';
import "./globals.css";
import StyledComponentsRegistry from "../../lib/registry";
import { Theme } from "@radix-ui/themes";
import { Header } from "@/components/Header";
import { LayoutContainer } from "@/components/LayoutContainer";

const poppins = Poppins({ 
  weight: ["500","600",],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Theme>
          <StyledComponentsRegistry>
            <Header />

            <main>              
                {children}
            </main>
          </StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  );
}
