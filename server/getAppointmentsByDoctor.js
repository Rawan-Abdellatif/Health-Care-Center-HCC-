const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAppointmentsByDoctor = async (req, res) => {
  const doctorId = req.params.doctorId;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("HCC");

    // Find all appointments for the specified doctor
    const appointments = await db
      .collection("appointments")
      .find({ doctorId })
      .toArray();

    res.status(200).json({ data: appointments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting appointments" });
  } finally {
    client.close();
  }
};

module.exports = { getAppointmentsByDoctor };
