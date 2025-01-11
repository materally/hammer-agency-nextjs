import Image from "next/image";

export const Header = () => (
  <header className=" text-white p-4 flex justify-end items-center gap-5">
    <div className="bg-violet-200/70 w-8 h-8 rounded-full flex items-center justify-center hover:bg-violet-300 transition cursor-pointer">
      <Image
        src="/icon/header/bell.svg"
        width={14}
        height={16}
        alt="Notification"
      />
    </div>
    <div className="text-13 cursor-pointer hover:text-slate-100">
      Account Name
    </div>
    <Image
      src="/icon/header/profile.png"
      width={45}
      height={45}
      alt="Profile"
      className="cursor-pointer hover:opacity-80 transition"
    />
  </header>
);
