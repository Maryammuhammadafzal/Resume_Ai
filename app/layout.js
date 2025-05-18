import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css"
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Resume - Ai",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,

    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={` ${inter.className} `}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            {/* */}
            <header className='w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 h-[80px]'>
              <Header />
            </header>
            {/* Main */}
            <main className="min-h-screen w-full"> {children}</main>
            <Toaster richColors />
            {/* Footer */}
            <footer className="bg-muted/50 py-4">
              <div className="container mx-auto px-4 text-center"></div>
              <p>Footer</p>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
