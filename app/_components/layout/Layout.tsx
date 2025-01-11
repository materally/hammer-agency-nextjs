import { SideBar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => (
  <div className="flex h-full">
    <SideBar />

    <div className="flex-1 flex flex-col">
      <Header />
      <main>{children}</main>
    </div>
  </div>
);
