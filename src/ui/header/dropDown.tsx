import { Fragment, useState, useRef, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Header from "./header";
import "src/ui/globals.css"
import "src/ui/header/header.css"


export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  }

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
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 -4 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>
                )}
              </a>
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isOpen}
              enter="transition  duration-200"
              enterFrom="opacity-50 "
              enterTo="opacity-100 "
              leave="transition ease-out duration-200"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0 "
            >
              <Popover.Panel
                className="absolute top-19"
                style={{ width: "200px" , backgroundColor: "#0a0a0a"}}
              >
                {/* Your dropdown menu content goes here */}
                <div className="p-4 text-white rounded-b border border-white border-t-black">
                  {/* button */}
                  <div className=" ">
                    
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
