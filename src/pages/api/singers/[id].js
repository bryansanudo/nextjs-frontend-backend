import { pool } from "@/config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getSinger(req, res);
    case "DELETE":
      return await deleteSinger(req, res);
    case "PUT":
      return await updateSinger(req, res);
  }
}

const getSinger = async (req, res) => {
  const { id } = req.query;

  const [result] = await pool.query("SELECT * FROM singer WHERE id = ?", [id]);

  return res.status(200).json(result[0]);
};

const deleteSinger = async (req, res) => {
  const { id } = req.query;
  const result = await pool.query("DELETE FROM singer WHERE id = ? ", [id]);

  return res.status(204).json();
};

const updateSinger = async (req, res) => {
  const { id } = req.query;
  const { name, age, gender } = req.body;
  try {
    await pool.query(
      "UPDATE singer SET name = ?, age = ?, gender= ? WHERE id = ?",
      [name, age, gender, id]
    );
    return res.status(204).json();
  } catch (error) {
    console.log(error.message);
  }
};
