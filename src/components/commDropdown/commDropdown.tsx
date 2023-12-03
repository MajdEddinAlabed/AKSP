'use client'
import { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { dropCommunitiesIcon } from "../icons/icons";
import Transitions from "../transition/transition";
import { CommunityReadDto } from "@/src/lib/types";

interface CommDropdownProps {
  communities: CommunityReadDto[]; 
}

export const CommDropdown = ({ communities }: CommDropdownProps) => {
  console.log("CommDropdown props:", communities);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    const handleLinkClick = () => {
      closeDropdown();
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleLinkClick);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleLinkClick);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="relative inline-block" ref={dropdownRef}>
        <button onClick={toggleDropdown}>{dropCommunitiesIcon()}</button>
        <Transitions isOpen={isOpen}>
          <div
            className="absolute top-19 z-10 left-[-19px] dropdown-content"
            style={{ width: "200px" }}
          >
            <div className="p-4 mx-5 text-white rounded-b border border-white border-t-black">
              <div>
                {communities.map((community) => (
                  <div key={community.id}>
                    <Link href={`/${community.id}`} onClick={closeDropdown}>
                      {community.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Transitions>
      </div>
    </div>
  );
};
