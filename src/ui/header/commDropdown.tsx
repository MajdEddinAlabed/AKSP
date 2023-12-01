import { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export const CommDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 50);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="onHover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative inline-block">
        <button className="dropbtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
            />
          </svg>
        </button>
        <Transition
          as="div"
          show={isOpen}
          enter="transition  duration-500"
          enterFrom="opacity-0 "
          enterTo="opacity-100 "
          leave="transition  duration-300"
          leaveFrom="opacity-100 "
          leaveTo="opacity-0 "
        >
          {isOpen && (
            <div
              className="absolute top-19 z-10 dropdown-content"
              style={{ width: "200px" }}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="p-4 mx-5 text-white rounded-b border border-white border-t-black">
                <div>
                  <Link href={""}>Community 1</Link>
                </div>
                <div>
                  <Link href={""}>Community 2</Link>
                </div>
                <div>
                  <Link href={""}>Community 3</Link>
                </div>
                <div>
                  <Link href={""}>Community 4</Link>
                </div>
                <div>
                  <Link href={""}>Community 5</Link>
                </div>
                <div>
                  <Link href={""}>Community 5</Link>
                </div>
                <div>
                  <Link href={""}>Community 5</Link>
                </div>
                <div>
                  <Link href={""}>Community 5</Link>
                </div>
                <div>
                  <Link href={""}>Community 5</Link>
                </div>
                <div>
                  <Link href={""}>Community 5</Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
};
