"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAppointment = async (req, res) => {
  const appointmentId = req.params.appointmentId;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("HCC");
    const result = await db
      .collection("appointment")
      .findOne({ _id: appointmentId });
    if (!result) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "This is the Appointment", data: result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving appointment" });
  }
  client.close();
};

module.exports = { getAppointment };
