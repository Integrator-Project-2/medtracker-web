import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@radix-ui/themes/styles.css';
import "./globals.css";
import StyledComponentsRegistry from "../../lib/registry";
import { Theme } from "@radix-ui/themes";
import { ClientLayout } from "@/components/ClientLayout";
import { DoctorProvider } from "@/context/DoctorContext";


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
            <DoctorProvider>
              <ClientLayout>
                {children}
              </ClientLayout>
            </DoctorProvider>
          </StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  );
}
