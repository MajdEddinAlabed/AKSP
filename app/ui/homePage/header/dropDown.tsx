import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
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
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                  </svg>
                )}
              </a>
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute top-full left-0 z-10"
                style={{ width: "200px" }}
              >
                {/* Your dropdown menu content goes here */}
                <div className="p-4 bg-white text-black">
                  <p>Hi!</p>
                  <p>meap</p>
                  <p>meap</p>
                  <p>meap</p>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
