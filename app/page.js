// import Image from "next/image";
"use client";
import { useEffect } from "react";
import MinePage from "./MinePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/Config.jsx";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Loader from "@/components/Loader.jsx";
// import Head from "next/head";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Redirect to signup if user is not logged in and loading is complete
    if (!loading && !user) {
      router.push("/signup"); // Redirect to the signup page
    }
  }, [loading, user, router]); // Dependency array

  if (loading) {
    return <Loader />; // Show a loading state while checking auth
  }

  if (error) {
    console.error("Authentication error:", error);
    return <div>Error: {error.message}</div>; // Handle authentication error
  }
  return (
    <main>
      {/* <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3290149202068454"
          crossorigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-3290149202068454" />
      </Head> */}
      <div className="text-center my-3">
        <p className=" text-3xl  font-mono">Spinn-Coins</p>
        <p className="text-2xl mt-1">Double-Coin</p>
      </div>
      <MinePage />
    </main>
  );
}
