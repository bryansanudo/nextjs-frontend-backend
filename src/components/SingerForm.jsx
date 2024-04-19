import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/style";

const SingerForm = () => {
  const [singer, setSinger] = useState({
    name: "",
    age: 0,
    gender: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (router.query.id) {
      console.log("update");
      const res = await axios.put("/api/singers/" + router.query.id, singer);
      console.log(res);
    } else {
      const res = await axios.post("/api/singers", singer);
      console.log(res);
    }

    router.push("/");
  };

  const handleChange = ({ target: { name, value } }) => {
    setSinger({ ...singer, [name]: value });
  };

  useEffect(() => {
    const getSinger = async () => {
      const { data } = await axios.get("/api/singers/" + router.query.id);
      setSinger(data);
    };

    if (router.query.id) {
      getSinger(router.query.id);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex   shadow-sm shadow-white  rounded-[20px]  flex-col md:p-10 p-6  w-full `}
    >
      <div className="flex flex-col w-full my-2">
        <label
          htmlFor="name"
          className={` flex items-center justify-start mb-1  ${styles.title} `}
        >
          Name
        </label>

        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={singer.name}
          autoComplete="off"
          className=" h-10 rounded-[10px] input   text-black font-normal text-[16px] leading-[24px] w-full pl-4 "
        />
      </div>
      <div className="flex flex-col w-full my-2">
        <label
          htmlFor="age"
          className={` flex items-center justify-start mb-1  ${styles.title} `}
        >
          Age
        </label>

        <input
          type="text"
          name="age"
          id="age"
          onChange={handleChange}
          value={singer.age}
          autoComplete="off"
          className=" h-10 rounded-[10px] input   text-black font-normal text-[16px] leading-[24px] w-full pl-4 "
        />
      </div>
      <div className="flex flex-col w-full my-2">
        <label
          htmlFor="gender"
          className={` flex items-center justify-start mb-1  ${styles.title} `}
        >
          Gender
        </label>

        <input
          type="text"
          name="gender"
          id="gender"
          onChange={handleChange}
          value={singer.gender}
          autoComplete="off"
          className=" h-10 rounded-[10px] input   text-black font-normal text-[16px] leading-[24px] w-full pl-4 "
        />
      </div>

      <button className="text-black font-bold mt-5 mx-auto w-[200px] bg-[#FECB5F]  p-3 rounded-lg hover:scale-105 duration-500">
        {router.query.id ? "Update Singer" : "Create Singer"}
      </button>
    </form>
  );
};

export default SingerForm;
