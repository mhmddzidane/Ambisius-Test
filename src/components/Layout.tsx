import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-5 w-[800px]">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
