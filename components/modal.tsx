"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function ModalComponent({
  isOpen,
  onClose,
  children,
}: 
  ModalType
) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-neutral-900/50 backdrop-blur-lg flex items-center justify-center"
    onClick={onClose}>
      <div className="bg-neutral-800 h-40 w-60 mx-auto p-4 border-2 border-neutral-500 rounded-lg shadow-md flex items-center justify-center">
        {children}
      </div>
        <button
        className="fixed top-70 right-62 hover:cursor-pointer"
        onClick={onClose}>
            <X/>
        </button>
    </div>
  );
}
