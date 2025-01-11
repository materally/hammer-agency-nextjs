import { Metadata } from "next";

import { Head, Items } from "./_components/all-projects";

export const metadata: Metadata = {
  title: "Hammer Agency",
  description: "Hammer Agency description",
};

export default function Home() {
  return (
    <div className="flex mx-5 lg:mx-16 bg-gradient-to-t from-indigo-950 from-40% via-violet-800 to-purple-300 rounded-[20px]">
      <main className="flex flex-col items-center w-full px-[15px] pt-[28px] pb-[65px]">
        <Head />

        <Items />
      </main>
    </div>
  );
}
