// "use client"; // Ensure this component is a client component

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define metadata
export const metadata = {
  title: "Double-Coins",
  description:
    "My website made for playing game. This game like minig coine. That have have minging function and generate coine and increase number using spinner in this website page.",
  keywords: "minig coine, game, spinner, coine, minging function",
  og: {
    title: "Double-Coins",
    description:
      "My website made for playing game. This game like minig coine. That have have minging function and generate coine and increase number using spinner in this website page.",
  },
  icons: {
    icon: "/editPhoto.png",
  },
  scripts: [
    {
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3290149202068454",
      crossorigin: "anonymous",
    },
  ],
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    },
  ],
  meta: [
    {
      name: "google-adsense-account",
      content: "ca-pub-3290149202068454",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3290149202068454"
  crossOrigin="anonymous"
></script>
    <meta name="google-adsense-account" content="ca-pub-3290149202068454" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pb-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
