"use client";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react"; // Import useState
import Image from "next/image";
import { DropDown } from "./dropDown";
import Link from "next/link";
import HeaderLinks from "./headerLinks";
import "src/ui/globals.css"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <header className="relative border-b border-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 lg:gap-x-10 items-center">
          {/* Drop down menu */}
          <DropDown />

          {/* Link */}

          {/* LOGO */}
          <a href="/" className="-m-1.5 p-1.5">
            <Image
              className=""
              src="/logoS.jpg"
              alt="ASKP Logo"
              width={250}
              height={0}
            />
          </a>
        </div>
        
        <div></div>
        {/* login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
