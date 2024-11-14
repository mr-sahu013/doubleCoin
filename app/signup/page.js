"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "@/components/firebase/Config.jsx";
import { ref, set } from "firebase/database";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const generateUsername = (displayName) => {
  const baseUsername = displayName.replace(/\s+/g, "").toLowerCase();
  const randomSuffix = Math.random().toString(36).substring(2, 7);
  let username = baseUsername.substring(0, 10) + randomSuffix;
  if (username.length > 15) {
    username = username.substring(0, 15);
  }
  return username;
};

const Signup = () => {
  const router = useRouter();
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      const userId = res.user.uid;
      const username = generateUsername(res.user.displayName);
      await set(ref(db, "users/" + userId), {
        FirstName: res.user.displayName.split(" ")[0],
        LastName: res.user.displayName.split(" ")[1] || "",
        email: res.user.email,
        username: username,
      });
      sessionStorage.setItem("user", true);
      toast.success("Logged in with Google!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.push("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      toast.error("Error signing in with Google: " + error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const memoizedToastContainer = useMemo(() => {
    return (
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    );
  }, []);

  return (
    <div>
      {memoizedToastContainer}

      <div className="mx-10 pt-10">
        <div>
          <div className="flex flex-col gap-1 my-3 text-center justify-center">
            <p className="text-xl">Double-Coin</p>
            <p className="animate-pulse">Mining-Game</p>
          </div>
          <div className="text-center bg-blue-500 rounded-2xl px-2">
            <p className="text-red-700 text-lg">Notice</p>
            <p>If you wants to generate coin, Please Login with google</p>
          </div>
          <div className="flex justify-center mt-10">
            <p className="text-3xl">Login</p>
          </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="flex w-full justify-center rounded-xl bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="mt-10 ">
          <p className="text-blue-500">
            This process is secure and trusted. Your data stored in Safely! so
            you can trust
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
