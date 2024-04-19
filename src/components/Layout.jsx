import React from "react";
import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-screen max-w-[1200px] mx-auto p-10">
        <Navbar />
        <div className="container mx-auto ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
