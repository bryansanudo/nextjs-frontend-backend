import React from "react";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";

const monte = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});
const Layout = ({ children }) => {
  return (
    <>
      <div className={` ${monte.className} max-w-[1350px] mx-auto p-10`}>
        <Navbar />
        <div className="container mx-auto ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
