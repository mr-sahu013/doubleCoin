import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center py-1 shadow-sm shadow-white">
      <div className="mx-5 flex items-center">
        <Link href={"/"}>
          {" "}
          <Image width={50} height={50} src="/editPhoto.png" alt="logo" />
        </Link>
        <Link href={"/"}>
          {" "}
          <p className="text-2xl font-serif text-white">Doble-Coin</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
