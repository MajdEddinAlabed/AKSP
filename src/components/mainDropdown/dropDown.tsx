import { Popover } from "@headlessui/react";
import Transitions from "../transition/transition";
import { xIcon, threeLinesLeft } from "../icons/icons";
import DropdownHandler from "../../lib/handleDropdown/dropdownHandler";

export const DropDown = () => {
  const { isOpen, toggleDropdown, closeDropdown, dropdownRef } =
    DropdownHandler();

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Drop down menu */}
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button onClick={toggleDropdown}>
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
                className="absolute top-19 z-10"
                style={{ width: "100px", backgroundColor: "#0a0a0a" }}
              >
                {/* Your dropdown menu content goes here */}
                <div className="p-4 text-white rounded-b border border-white border-t-black">
                  {/* button */}
                  <div className=""></div>
                </div>
              </Popover.Panel>
            </Transitions>
          </>
        )}
      </Popover>
    </div>
  );
};
