"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import styles from "@/style";
import { IoMdPersonAdd } from "react-icons/io";

import axios from "axios";
function HomePage({ singers }) {
  return (
    <Layout>
      <div className="overflow-x-auto">
        <table className="table  text-white">
          {/* head */}
          <thead>
            <tr className={`${styles.title}`}>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Musical Genre</th>
            </tr>
          </thead>
          <tbody
            className={`font-normal text-white text-[16px] leading-[24px]`}
          >
            {/* row 1 */}
            {singers.map((singer) => (
              <tr className={``} key={singer.id}>
                <td className={` `}>{singer.id}</td>
                <td>{singer.name}</td>
                <td>{singer.age}</td>
                <td>{singer.gender}</td>
                <td className="text-white text-3xl hover:text-[#FECB5F]">
                  <Link href={`/singers/${singer.id}`}>
                    <BsThreeDots />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full  flex items-center justify-center mt-10">
          <Link href="/new">
            <button className="group text-white font-medium border-[#FECB5F] border-2 p-2 rounded-lg ">
              <div className="flex items-center justify-center gap-2">
                Create Singer
                <IoMdPersonAdd className="text-3xl group-hover:text-[#FECB5F] duration-500" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: singers } = await axios.get(
    "http://localhost:3000/api/singers"
  );

  return {
    props: {
      singers,
    },
  };
};

export default HomePage;
