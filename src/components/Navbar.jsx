import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  /* navbar funcionality */

  const links = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Drops",
    },
    {
      id: 3,
      name: "Market Place",
    },
    {
      id: 4,
      name: "Activity",
    },
    {
      id: 5,
      name: "Company",
    },
  ];
  return (
    <>
      <div className=" flex items-center justify-center mb-20  w-full z-50 ">
        <div className="flex bg-[#173539] gap-20 justify-between items-center w-[1200px] ">
          <div className="bg-white rounded-full p-[2px]">
            <Link href="/">
              <Image
                className="object-contain  "
                src="/favicon.ico"
                width={50}
                height={50}
                alt="logo"
              />
            </Link>
          </div>

          <ul className="flex gap-8 items-center justify-center">
            {links.map(({ id, name }) => (
              <li
                key={id}
                className={`text-[18px] text-white  hover:text-primary capitalize duration-300 cursor-pointer `}
              >
                <a>{name}</a>
              </li>
            ))}
          </ul>
          <button className="text-white border-[#FECB5F] border-2 p-2 rounded-lg hover:scale-105 duration-500">
            Ver en opensea
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
