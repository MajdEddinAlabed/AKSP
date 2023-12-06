"use client";
import { DropDown } from "../mainDropdown/dropDown";
import HeaderButtons from "../navLinks/headerButtons";
import "src/components/globals.css";
import "src/components/header/header.css";
import { CommDropdown } from "../commDropdown/commDropdown";
import { SearchBox } from "../searchBox/searchBox";
import { Logo } from "../logo/logo";
import Link from "next/dist/client/link";

export default function Header() {
  return (
    <header className="relative border-b border-white">
      <div className="flex items-center relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1 lg:gap-x-10 items-center">
            {/* Drop down menu */}
            <DropDown />
            {/* LOGO */}
            <Logo />
            {/* Search box */}
            <SearchBox />
            {/* Header buttons */}
            <HeaderButtons />
            {/* Communities dropdown icon button */}
            <CommDropdown communities={[]} />
          </div>
        </div>
        {/* This is buttons for login and sign up pages but when adding them it's making the header move to the right and i don't know how to do it */}
        {/* <div className="">
          <Link href="/signUp">
            <button
              type="submit"
              className="block w-20 bg-gradient-to-tr from-blue-800 to-purple-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button
              type="submit"
              className="relative overflow-hidden block w-20 bg-black mt-4 py-2 rounded-2xl font-semibold mb-2"
            >
              <span className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-purple-700"></span>
              <span className="relative z-10">Login</span>
              <span className="absolute -m-0.5 inset-1 bg-black rounded-2xl"></span>
            </button>
          </Link>
        </div> */}
      </div>
    </header>
  );
}
