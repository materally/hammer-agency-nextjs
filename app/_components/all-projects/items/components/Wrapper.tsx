import { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-full bg-[#30273F] rounded-xl mt-[26px] pt-[42px] pb-[46px] pl-[14px] pr-[39px] overflow-y-auto h-[calc(100vh-280px)]">
    {children}
  </div>
);

/* [&::-webkit-scrollbar]:w-5 
  [&::-webkit-scrollbar-track]:rounded-xl
  [&::-webkit-scrollbar-track]:bg-[#30273F]
  [&::-webkit-scrollbar-thumb]:bg-red-400 
  [&::-webkit-scrollbar-thumb]:rounded-xl
  [&::-webkit-scrollbar-thumb]:w-2 */
