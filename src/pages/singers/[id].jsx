import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { MdOutlineEditNote } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const SingerPage = ({ singer }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    await axios.delete("/api/singers/" + id);
    router.push("/");
  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-4 bg-gray-200 w-full   shadow-sm shadow-[#FECB5F] justify-between  px-6 py-2 rounded-lg ">
          <div className=" flex flex-col items-center justify-center">
            <p className="font-bold">Id</p> <p>{singer.id}</p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <p className="font-bold">Name</p> <p>{singer.name}</p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <p className="font-bold">Age</p> <p>{singer.age}</p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <p className="font-bold">Musical Genre</p> <p>{singer.gender}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 mt-4">
          <button
            className="group text-white border-[#FECB5F] border-2 p-2 rounded-lg"
            onClick={() => router.push("/singers/edit/" + singer.id)}
          >
            <div className="flex items-center justify-center gap-1">
              Edit
              <MdOutlineEditNote className="text-3xl group-hover:text-[#FECB5F] duration-500" />
            </div>
          </button>
          <button
            onClick={() => handleDelete(singer.id)}
            className="group text-white border-[#FECB5F] border-2 p-2 rounded-lg "
          >
            <div className="flex items-center justify-center gap-1">
              Delete
              <MdDeleteForever className="text-3xl group-hover:text-[#FECB5F] duration-500" />
            </div>
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
