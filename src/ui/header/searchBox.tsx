import React, { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import "src/ui/header/header.css"

export const SearchBox = () => {
  return (
    <div>
      <form>
        <input className="sInput" type="text" name="search" placeholder="Search.." />
      </form>
    </div>
  );
};
