import React from "react";
import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-[#173539] h-screen w-full mx-auto p-10">
        <Navbar />
        <div className="container mx-auto ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
