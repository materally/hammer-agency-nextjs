import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";

const sortOptions = ["All", "New", "In Progress", "Finished"];

export const Head = () => (
  <div className="flex justify-between items-center w-full">
    <h1 className="font-semibold text-[35px]/[42px]">All projects</h1>

    <div className="flex items-center gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for Project"
          className="px-4 py-3 md:w-[240px] lg:w-[329px] h-10 rounded-lg text-[15px]/[15px] bg-transparent border border-white placeholder-white focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <Image
            src="/icon/common/search.svg"
            width={16}
            height={16}
            alt="Search"
          />
        </div>
      </div>

      <Listbox>
        <div>
          <ListboxButton className="flex items-center justify-center cursor-pointer transition hover:bg-violet-300 rounded-full h-7 w-7">
            <Image
              src="/icon/common/sort.svg"
              width={17}
              height={10}
              alt="Sort"
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-15 mt-2 max-h-56 w-36 overflow-auto rounded-lg bg-[#251F30] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm right-[77px]"
          >
            {sortOptions.map((option, idx) => (
              <ListboxOption
                key={idx}
                value={option}
                className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-white text-[13px] data-[focus]:bg-agencyPurple data-[focus]:text-white data-[focus]:outline-none"
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {option}
                  </span>
                </div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  </div>
);
