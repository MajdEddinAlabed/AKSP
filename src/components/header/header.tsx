"use client";
import { DropDown } from "../mainDropdown/dropDown";
import HeaderButtons from "../navLinks/headerButtons";
import "src/components/globals.css";
import "src/components/header/header.css";
import { CommDropdown } from "../commDropdown/commDropdown";
import { SearchBox } from "../searchBox/searchBox";
import { Logo } from "../logo/logo";

export default function Header() {
  return (
    <header className="relative border-b border-white">
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
          <CommDropdown />
        </div>
      </div>
    </header>
  );
}
