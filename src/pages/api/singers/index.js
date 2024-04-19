import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getSingers(req, res);
    case "POST":
      return await saveSinger(req, res);
  }
}

const getSingers = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM singer");

  return res.status(200).json(result);
};

const saveSinger = async (req, res) => {
  const { name, age, gender } = req.body;
  console.log("creating a singer");

  const [result] = await pool.query("INSERT INTO singer SET ?", {
    name,
    age,
    gender,
  });

  return res.status(200).json({ name, age, gender, id: result.insertId });
};
