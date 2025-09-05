import Image from "next/image";
import Link from "next/link";
import React from "react";
import SecondaryButton from "./SecondaryButton";


const HeaderLinks  = [
    {label: "Home", link:"/"},
    {label: "Profile", link:"/"},
    {label: "Blog", link:"/"}
]

export default function Header() {
  return (
    <div>
      <nav className="">
        {/* main div */}
        <div className="flex justify-between px-8 py-6 items-center">
            {/* Logo */}
          <div>
            <Link 
            href={"/"} 
            title="Home"
            className="font-bold font-sans italic text-2xl ">WS</Link>
          </div>

          {/* Links */}
          <div className="">
            {HeaderLinks.map( item => (
                <Link 
                key={item.label}
                href={item.link}
                className="px-4 font-semibold">
                    {item.label}
                </Link>
            ))}
          </div>

          {/* Button */}
          <div>
            <SecondaryButton
            text="Click"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
