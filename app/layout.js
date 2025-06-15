import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VitiligoCare",
  description: "Dealing with Vitiligo Skin Disease - Early Detection. Expert Advice. Real Care",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="min-h-screen">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-300">
                <p className="text-lg font-semibold">Vitiligo Care App</p>
                <p className="mt-2 text-sm">
                  Supporting skin health and confidence through AI-powered diagnosis.
                </p>
                <p className="mt-4 text-xs text-gray-500">
                  © 2025 Vitiligo Care. All rights reserved.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

