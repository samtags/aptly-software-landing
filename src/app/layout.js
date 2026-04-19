import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sileo";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  title: "Aptly Software",
  description: "Product-focused software studio landing page.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} `}>
        {children}
        <Toaster position="top-center" />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
