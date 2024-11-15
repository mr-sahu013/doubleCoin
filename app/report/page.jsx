"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore, auth } from "@/components/firebase/Config.jsx"; // Ensure db is imported

const Page = () => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const MIN_MESSAGE_LENGTH = 20; // Set your minimum character limit here

  const sendMessage = async () => {
    try {
      if (user) {
        await addDoc(collection(firestore, "messages", user.uid, "reports"), {
          message: message,
          timestamp: new Date(),
        });
        setMessage(""); // Clear the message after sending
        setError(null); // Clear any previous errors
      } else {
        setError("User  not authenticated");
      }
    } catch (err) {
      setError("Failed to send message: " + err.message);
    }
  };

  return (
    <div>
      <div className="mx-5 space-y-5">
        <h1 className="text-3xl text-center mt-4">Report!</h1>
        <p className="text-center bg-slate-500 px-5 rounded-lg ">
          If you have any issues then you can contact me through message
        </p>
        <textarea
          className=" px-4 py-3 outline-none w-full  rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div className="flex justify-center">
          {error && <p className="text-red-500">{error}</p>}
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              message.length < MIN_MESSAGE_LENGTH
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={sendMessage}
            disabled={message.length < MIN_MESSAGE_LENGTH} // Disable button if message is too short
          >
            Send Message
          </button>
        </div>
        {message.length < MIN_MESSAGE_LENGTH && (
          <p className="text-red-500 ml-2 text-center">
            Minimum {MIN_MESSAGE_LENGTH} characters required.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
