"use client";

import Image from "next/image";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { ModalProps } from "./model";

export const Modal = ({
  open,
  onClose,
  actionLabel,
  title,
  children,
  action,
}: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-visible rounded-[20px] shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="bg-agencyDarkGray border border-[#726385] p-4 rounded-[20px] min-w-[400px]">
              <div className="flex justify-end">
                <Image
                  src="/icon/common/xmark.svg"
                  alt="close"
                  width={14}
                  height={14}
                  className="cursor-pointer"
                  onClick={onClose}
                />
              </div>
              <div className="px-16 pb-4">
                <DialogTitle className="text-xl font-medium text-white">
                  {title}
                </DialogTitle>

                {children}

                <button
                  type="button"
                  onClick={action ? action : onClose}
                  className="transition inline-flex w-full justify-center rounded-lg bg-agencyPurple px-3 py-2 text-[15px] font-medium text-white shadow-sm hover:bg-purple-500"
                >
                  {actionLabel}
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
