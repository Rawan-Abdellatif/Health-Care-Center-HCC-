"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getPatient = async (req, res) => {
  const patientId = req.params.patientId;
  const client = new MongoClient(MONGO_URI, options);
  console.log(patientId);
  try {
    await client.connect();
    const db = client.db("HCC");
    const patient = await db.collection("patients").findOne({ _id: patientId });
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({ message: "This is the patient", data: patient });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving patient" });
  }
  client.close();
};

module.exports = { getPatient };
