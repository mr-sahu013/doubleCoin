"use client";
import React, { useEffect, useState } from "react";

import { firestore } from "@/components/firebase/Config.jsx"; // Ensure firestore is imported
import { collection, getDocs } from "firebase/firestore"; // Ensure collection and getDocs are imported

const Page = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(firestore, "articles"));
      const articlesList = querySnapshot.docs.map((doc) => doc.data());
      setArticles(articlesList);
    };

    fetchArticles();
  }, []);

  return (
    <div className="mt-5">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div
            key={index}
            className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-2 mt-2"
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {article.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {article.content}
            </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
