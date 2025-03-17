import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toggle } from "@/components/ui/toggle";
import Header from "@/components/ui/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header></Header>
          <main> {children} </main>
          <footer className="py-10 bg-muted/50 rounded">
            <div className="container text-center mx-auto  text-xl">
              <p>Made with love by Divyanshu</p>
            </div>
          </footer>
        </ThemeProvider>
          
      </body>
    </html>
  );
}
