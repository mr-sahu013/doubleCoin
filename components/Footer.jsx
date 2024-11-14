import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineReport } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full mb-2">
      <div className="flex justify-around items-center bg-orange-900 py-2 mx-2 rounded-lg">
        <Link href={"/"}>
          <button className="flex bg-slate-600 text-center items-center justify-center  cursor-pointer text-white font-bold relative text-[14px] w-[3em] h-[3em] bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-lg z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-lg before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            <p className="p-2 text-center items-center text-2xl">
              <FaHome />
            </p>
          </button>
        </Link>
        <Link href={"/articles"}>
          <button className="flex bg-slate-600 text-center items-center justify-center  cursor-pointer text-white font-bold relative text-[14px] w-[3em] h-[3em] bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-lg z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-lg before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            <p className="p-2 text-center items-center text-2xl">
              <GiNewspaper />
            </p>
          </button>
        </Link>
        <Link href={"/report"}>
          <button className="flex bg-slate-600 text-center items-center justify-center  cursor-pointer text-white font-bold relative text-[14px] w-[3em] h-[3em] bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-lg z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-lg before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            <p className="p-2 text-center items-center text-2xl">
              <MdOutlineReport />
            </p>
          </button>
        </Link>
        <Link href={"/admin"}>
          <button className="flex bg-slate-600 text-center items-center justify-center  cursor-pointer text-white font-bold relative text-[14px] w-[3em] h-[3em] bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-lg z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-lg before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            <p className="p-2 text-center items-center text-2xl ">
              <VscAccount />
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
