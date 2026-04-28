import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";
import AOSInit from "../components/aosInit.jsx";
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
        <AOSInit />
        {children}
      <div className="fixed bottom-0 left-0 w-full h-24 backdrop-blur-md pointer-events-none 
[mask-image:linear-gradient(to_top,black_40%,rgba(0,0,0,0.5)_70%,transparent)] 
[-webkit-mask-image:linear-gradient(to_top,black_40%,rgba(0,0,0,0.5)_70%,transparent)]">
</div>
        <Toaster position="top-center" />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
