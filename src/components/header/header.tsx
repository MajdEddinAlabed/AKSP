"use client";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react"; // Import useState
import Image from "next/image";
import { DropDown } from "../mainDropdown/dropDown";
import Link from "next/link";
import HeaderLinks from "../navLinks/headerLinks";
import "src/components/globals.css";
import "src/components/header/header.css"
import { CommDropdown } from "../commDropdown/commDropdown";
import { SearchBox } from "../searchBox/searchBox";

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
          <SearchBox />
          <HeaderLinks />
        </div>
        
          {/* Search box */}
          
        <div></div>
        <CommDropdown />
      </div>
    </header>
  );
}
