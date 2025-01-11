import Image from "next/image";

import { Item } from "./components/Item";
import { data } from "./data";

export const SideBar = () => (
  <div className="bg-violet-950 bg-opacity-70 text-white w-20 relative">
    <div className="rounded-full bg-indigo-900 w-6 h-6 absolute top-5 -right-3 flex items-center justify-center transition cursor-pointer hover:bg-indigo-700">
      <Image
        src="/icon/sidebar/toggle.svg"
        width={11}
        height={10}
        alt="Toggle"
      />
    </div>
    <Image
      src="/logo/sidebar.svg"
      width={62}
      height={62}
      alt="Agency Logo"
      className="mx-auto mb-4 border-white border-b-2 border-opacity-50"
    />
    <ul>
      {data.map((item, index) => (
        <Item
          key={index}
          icon={
            <Image src={item.icon} width={14} height={14} alt={item.label} />
          }
          label={item.label}
          active={item.active}
        />
      ))}
    </ul>
  </div>
);
