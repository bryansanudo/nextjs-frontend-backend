"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

import axios from "axios";
function HomePage({ singers }) {
  return (
    <div className="bg-[#173539]">
      <Layout>
        <div className="flex flex-col items-center">
          {singers.map((singer) => (
            <Link href={`/singers/${singer.id}`} key={singer.id}>
              <div className="flex gap-4 bg-gray-100 w-[1200px] m-4 border  border-gray-200 shadow-sm shadow-black justify-between hover:bg-gray-300 px-2 py-4 rounded-lg ">
                <p className="">Id : {singer.id}</p>
                <p>Name : {singer.name}</p>
                <p>Age : {singer.age}</p>
                <p>Gender Musical : {singer.gender}</p>
              </div>
            </Link>
          ))}

          <button className="text-white border-[#FECB5F] border-2 p-2 rounded-lg hover:scale-105 duration-500">
            <Link href="/new">Create Singers</Link>
          </button>
        </div>
      </Layout>
    </div>
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
