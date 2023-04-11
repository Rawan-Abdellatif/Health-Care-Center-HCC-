"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getPatients = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("HCC");
    const patients = await db.collection("patients").find().toArray();
    res.status(200).json({ data: patients });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving patients" });
  } finally {
    client.close();
  }
};

module.exports = { getPatients };
