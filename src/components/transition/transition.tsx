import { Transition } from "@headlessui/react";
import React, { Fragment, ReactNode } from "react";

interface TransitionsProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function Transitions({ isOpen, children }: TransitionsProps) {
  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter="transition duration-200"
      enterFrom="opacity-50"
      enterTo="opacity-100"
      leave="transition ease-out duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}
