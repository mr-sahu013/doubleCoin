"use client";
import React, { useState, useEffect } from "react";
import { FaCoins } from "react-icons/fa6";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore, auth, db } from "@/components/firebase/Config.jsx";
import { ref, get } from "firebase/database";
import { doc, setDoc, getDoc } from "firebase/firestore"; // Import Firestore functions
import Image from "next/image";
import Head from "next/react"

const MinePage = () => {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState("");
  const [coin, setCoin] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isMining, setIsMining] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userRef = ref(db, "users/" + user.uid); // Reference to the user's data
          const snapshot = await get(userRef); // Get the user's data

          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUsername(userData.username); // Set the username from the database
          } else {
            console.log("No user data available");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]); // Run effect when the user changes

  useEffect(() => {
    const fetchCoinData = async () => {
      if (user) {
        const userDocRef = doc(firestore, "coins", user.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setCoin(userData.coin || 0); // Retrieve coin amount from Firestore
        }
      }
    };

    fetchCoinData();
  }, [user]); // Run effect when the user changes

  useEffect(() => {
    let interval;
    if (isMining) {
      setAnimate(true); // Start animation when mining starts
      interval = setInterval(async () => {
        setCoin((prevCoin) => {
          const newCoin = prevCoin + 0.04469485;
          // Update Firestore with the new coin value
          if (user) {
            const userDocRef = doc(firestore, "coins", user.uid); // Reference to the user's Firestore document
            setDoc(userDocRef, { coin: newCoin }, { merge: true }); // Update or create the coin field
          }
          return newCoin;
        });
      }, 1000);
    } else {
      setAnimate(false); // Stop animation when mining stops
    }

    return () => {
      clearInterval(interval);
    };
  }, [isMining, user]); // Include user as a dependency

  const handleMineClick = () => {
    setIsMining((prevIsMining) => !prevIsMining); // Toggle mining state
  };

  return (
    <>
      <div className="mine-web">
        <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3290149202068454"
     crossorigin="anonymous"></script>
    </Head>
        <div className="bg-slate-700 mx-5 rounded-lg">
          <div className="text-center mt-5">
            <p className="bg-slate-600 text-red-500 rounded-lg px-2 py-1 text-center">
              @{username}
            </p>
            <div className="flex justify-center items-center gap-2 ">
              <FaCoins className="text-yellow-500" />
              <p className="text-white">Your Coin</p>
            </div>
            <p className="double-coin text-xl text-white">{coin.toFixed(3)}</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>{isMining ? "Mining: Start" : "Mining: Stop"}</p>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-950 h-32 w-32 rounded-full flex items-center justify-center"
            onClick={handleMineClick}
          >
            <Image
              width={300}
              height={300}
              src="/spinner.png"
              alt=""
              className={animate ? "animate-spin" : ""}
              style={{ animationDuration: "2s" }} // Set spin speed of animation
            />
          </button>
        </div>
        <div className="div flex gap-2 mx-5 mt-5">
          <p className="text-red-500">Note:-</p>
          <p>
            Please stay here to mine more coin, when you switch other page, then
            may be minig stopped
          </p>
        </div>
      </div>
    </>
  );
};

export default MinePage;
