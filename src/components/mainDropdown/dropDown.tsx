import { Fragment, useState, useRef, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Header from "../header/header";
import "src/components/globals.css";
import "src/components/header/header.css";
import Transitions from "../transition/transition";
import { xIcon, threeLinesLeft } from "../icons/icons";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener("mousedown", handleClickOutside);
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      {/* Drop down menu */}
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button onClick={handleDropdownToggle}>
              {/* Update class based on dropdown state */}
              <a
                href="#"
                className={`text-sm font-semibold leading-6 text-white ${
                  isOpen ? "text-indigo-600" : ""
                }`}
              >
                {isOpen ? xIcon() : threeLinesLeft()}
              </a>
            </Popover.Button>

            <Transitions isOpen={isOpen}>
              <Popover.Panel
                className="absolute top-19"
                style={{ width: "200px", backgroundColor: "#0a0a0a" }}
              >
                {/* Your dropdown menu content goes here */}
                <div className="p-4 text-white rounded-b border border-white border-t-black">
                  {/* button */}
                  <div className=" "></div>
                </div>
              </Popover.Panel>
            </Transitions>
          </>
        )}
      </Popover>
    </div>
  );
};
