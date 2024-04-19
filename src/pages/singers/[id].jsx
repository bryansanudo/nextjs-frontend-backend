import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

const SingerPage = ({ singer }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    await axios.delete("/api/singers/" + id);
    router.push("/");
  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-4 bg-gray-100 w-[1200px] m-4 border  border-gray-200 shadow-sm shadow-black justify-between  px-2 py-4 rounded-lg ">
          <p className="">Id : {singer.id}</p>
          <p>Name : {singer.name}</p>
          <p>Age : {singer.age}</p>
          <p>Gender Musical : {singer.gender}</p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <button
            className="text-white border-[#FECB5F] border-2 p-2 rounded-lg hover:scale-105 duration-500"
            onClick={() => router.push("/singers/edit/" + singer.id)}
          >
            edit
          </button>
          <button
            onClick={() => handleDelete(singer.id)}
            className="text-white border-[#FECB5F] border-2 p-2 rounded-lg hover:scale-105 duration-500"
          >
            delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { data: singer } = await axios.get(
    "http://localhost:3000/api/singers/" + context.query.id
  );

  return {
    props: {
      singer,
    },
  };
};

export default SingerPage;
