"use client";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { auth, db, firestore } from "@/components/firebase/Config.jsx"; // Ensure db is imported
import { ref, get } from "firebase/database";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Page = () => {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState("");
  const [coin, setCoin] = useState(0); // State for total coins
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter(); // Initialize useRouter

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
    const fetchUserCoin = async () => {
      if (user) {
        try {
          // Fetch user data from Firestore
          const userDocRef = doc(firestore, "coins", user.uid); // Reference to the user's Firestore document
          const userDoc = await getDoc(userDocRef); // Get the user's Firestore document

          if (userDoc.exists()) {
            const userData = userDoc.data(); // Set the username from Firestore
            setCoin(userData.coin || 0); // Set total coins from Firestore
          } else {
            console.log("No user data available");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserCoin();
  }, [user]); // Run effect when the user changes

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUsername("");
      setCoin(0);
      router.push("/signup"); // Redirect to signup page after logout
    });
  };

  return (
    <div className="my-4">
      <div className="group before:hover:scale-95 before:hover:h-96 before:hover:w-[100%]  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[100%] before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-800 to-orange-700 before:absolute before:top-0 h-96 relative bg-slate-600 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        {/* <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
          <img
            src={user?.photoURL || "/spinner.jpg"}
            alt="Image Fetching Problem"
            className="rounded-full h-28 w-28 bg-gray-700 border border-white"
          />
        </div> */}
        <div className="  group-hover:-translate-y-10 transition-all duration-500">
          <p className=" px-2 py-1 flex text-white text-center">
            D-Coins : {coin}
          </p>
          <p className=" font-semibold text-white">@{username}</p>
          <span className="text-2xl font-semibold text-white">
            {user?.displayName}
          </span>
          <p className="text-white">{user?.email}</p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={() => setShowConfirmation(true)}
        >
          Logout
        </button>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <p className="mb-2 text-black text-center">
              Are you sure you want to logout?
            </p>
            <p className="mb-4 text-black text-center">
              Alert! Be carefull! You will loss your data.
            </p>
            <div className="flex justify-between">
              <button
                className="bg-red-600 px-4 py-2 rounded-lg text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button
                className="bg-gray-600 px-4 py-2 rounded-lg text-white"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
