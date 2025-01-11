import Image from "next/image";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import { LoopProps, LoopType } from "./model";
import { Master } from "@/app/_components/all-projects/items/model";

const loopSettings = {
  [LoopType.BRIEFING]: {
    icon: "/icon/loop/briefing.svg",
    title: "Briefing loop",
    background: "bg-[#9B2BF2]",
  },
  [LoopType.RESEARCH]: {
    icon: "/icon/loop/research.svg",
    title: "Research loop",
    background: "bg-agencyPurple",
  },
  [LoopType.STRATEGY]: {
    icon: "/icon/loop/strategy.svg",
    title: "Strategy loop",
    background: "bg-[#7234F8]",
  },
  [LoopType.PRESENTATION]: {
    icon: "/icon/loop/presentation.svg",
    title: "Presentation",
    background: "bg-[#389AF5]",
  },
};

export const Loop = ({
  type,
  masterOptions,
  selectedOption,
  onChange,
}: LoopProps<Master>) => {
  const { background, icon, title } = loopSettings[type];

  return (
    <div className="rounded-lg bg-[#372D48] pb-2 pt-2 mb-4">
      <div
        className={`flex items-center ${background} rounded-lg p-2 text-xxs mx-2`}
      >
        <div className="w-4 h-4 mr-2 relative">
          <Image src={icon} alt={title} fill objectFit="contain" />
        </div>
        {title}
      </div>
      <Listbox>
        <div className="relative mt-2">
          {selectedOption ? (
            <ListboxButton className="flex items-center px-2">
              <img
                alt=""
                src={selectedOption.picture}
                className="size-5 shrink-0 rounded-full border border-white"
              />
              <span className="ml-2 block truncate font-normal group-data-[selected]:font-semibold text-[13px]">
                {selectedOption.name}
              </span>
            </ListboxButton>
          ) : (
            <ListboxButton className="flex justify-between items-center w-full cursor-pointer px-2">
              <span className="text-agencyGray text-[13px] ">
                Choose loop master
              </span>
              <Image
                src="/icon/common/chevron.svg"
                width={15}
                height={15}
                alt="arrow down"
              />
            </ListboxButton>
          )}

          <ListboxOptions
            transition
            className="absolute z-20 mt-2 max-h-56 w-full overflow-auto rounded-lg bg-[#251F30] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {masterOptions.map((master) => (
              <ListboxOption
                key={master.id}
                value={master}
                onClick={() => onChange(master)}
                className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-white text-[13px] data-[focus]:bg-agencyPurple data-[focus]:text-white data-[focus]:outline-none"
              >
                <div className="flex items-center">
                  <img
                    alt=""
                    src={master.picture}
                    className="size-5 shrink-0 rounded-full border border-white"
                  />
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {master.name}
                  </span>
                </div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};
