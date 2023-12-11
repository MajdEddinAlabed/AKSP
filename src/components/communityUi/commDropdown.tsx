import Link from "next/link";
import { Icons } from "@/src/components/icons/icons";
import { CommunityReadDto } from "@/src/lib/types";
import CommDropdownHandler from "../../lib/handleDropdown/commDropdownHandler";
import Transitions from "../transition/transition";

interface CommDropdownProps {
  communities: CommunityReadDto[];
}

export const CommDropdown = ({ communities }: CommDropdownProps) => {
  const { isOpen, toggleDropdown, closeDropdown, dropdownRef } =
    CommDropdownHandler();
  return (
    <div>
      <div className="relative inline-block" ref={dropdownRef}>
        <button onClick={toggleDropdown}>{Icons.dropCommunitiesIcon}</button>
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
