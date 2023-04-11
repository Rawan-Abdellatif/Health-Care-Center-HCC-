"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAdmin = async (req, res) => {
  const adminId = req.params.adminId;
  const client = new MongoClient(MONGO_URI, options);
  console.log(adminId);
  try {
    await client.connect();
    const db = client.db("HCC");
    const admin = await db.collection("Admins").findOne({ _id: adminId });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "This is the Admin", data: admin });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving patient" });
  }
  client.close();
};

module.exports = { getAdmin };
