import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center py-1 shadow-sm shadow-white">
      <div className="mx-5 flex items-center">
        <Link href={"/"}>
          {" "}
          <img src="/editPhoto.png" alt="logo" className="h-10" />
        </Link>
        <Link href={"/"}>
          {" "}
          <p className="text-2xl font-serif">Doble-Coin</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
