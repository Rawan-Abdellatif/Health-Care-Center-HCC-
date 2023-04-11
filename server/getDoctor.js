"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getDoctor = async (req, res) => {
  const doctor_Id = req.params.doctorId;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("HCC");
    const doctor = await db.collection("doctors").findOne({ _id: doctor_Id });
    if (!doctor) {
      return res.status(404).json({ message: "doctor not found" });
    }
    res.status(200).json({ message: "This is the doctor", data: doctor });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving doctor" });
  } finally {
    client.close();
  }
};

module.exports = { getDoctor };
