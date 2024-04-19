import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <div className="bg-gray-100 p-4 m-4 ">
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          className="border-2"
          onChange={handleChange}
          value={singer.name}
        />

        <label htmlFor="age">age:</label>
        <input
          type="text"
          name="age"
          id="age"
          className="border-2"
          onChange={handleChange}
          value={singer.age}
        />

        <label htmlFor="gender">gender:</label>
        <textarea
          name="gender"
          rows="2 "
          className="border-2"
          onChange={handleChange}
          value={singer.gender}
        ></textarea>

        <button className="text-black mt-5 mx-auto w-[200px] border-[#FECB5F] border-2 p-2 rounded-lg hover:scale-105 duration-500">
          {router.query.id ? "Update Singer" : "Create Singer"}
        </button>
      </form>
    </div>
  );
};

export default SingerForm;
