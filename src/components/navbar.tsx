"use client";
import Link from "next/link";
import { Menu } from "./ui/menu";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!navbar);
  };

  console.log("Value of our navbar in boolean: " + navbar);
  return (
    <header>
      {/* large Screen */}
      <nav
        className={`${
          navbar
            ? "hidden"
            : "flex justify-between items-center px-10 h-20 w-full"
        }`}
      >
        <div className="">Large Screen Nav</div>
        <div className="lg:flex gap-5 hidden">
          {Menu.map((link, index) => (
            <Link key={index} href={link.path} className="hover:bg-green-200">
              {link.name}
            </Link>
          ))}
        </div>
        <div className=" hidden lg:flex bg-white border gap-1 border-black rounded-sm items-center px-2">
          <SearchIcon size={15} />
          <input
            type="text"
            placeholder={"What are you looking for"}
            className="outline-none"
          />
        </div>
        <div className="lg:block hidden">cart</div>
        <div className="lg:hidden block" onClick={handleNav}>
          Toggle Button
        </div>
      </nav>
      {/* small screen */}
      <div
        className={`${
          navbar
            ? "top-0 left-0 w-full h-screen z-[100] flex justify-between py-3 px-10"
            : "hidden"
        }`}
      >
        <div className="">Mobile Nav</div>
        <div className="" onClick={handleNav}>
          Toggle button
        </div>
      </div>
    </header>
  );
};
export default Navbar;
