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
            className="absolute top-19 z-10 left-[-19px] dropdown-content "
            style={{ width: "200px" }}
          >
            <div className="p-4 mx-5 text-white rounded-b border border-white border-t-black bg-black">
              <div style={{ height: "200px", overflowY: "auto" }}>
                <ul>
                  {communities.map((community) => (
                    <li key={community.id} onClick={closeDropdown}>
                      <Link href={`http://${community.host}.localhost:3000`}>
                        <>
                          <div className="border rounded border-gray-400 mb-2 p-1 text-sm hover: scale">
                            {community.name}
                          </div>
                          <div></div>
                        </>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="btn btn-outline btn-primary" onClick={closeDropdown}>Create community</div>
            </div>
          </div>
        </Transitions>
      </div>
    </div>
  );
};
