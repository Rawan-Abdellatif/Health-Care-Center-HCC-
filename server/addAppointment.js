const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addAppointment = async (req, res) => {
  const doctorId = req.params.doctorId;
  const appointment = req.body;
  console.log("req.body", req.body);
  console.log("doctorId", doctorId);

  try {
    const client = await MongoClient.connect(MONGO_URI, options);
    const db = client.db("HCC");

    // Generate a unique ID for the appointment
    const appointmentId = uuidv4();

    // Add the appointmentId and doctorId references to the appointment data
    appointment.appointmentId = appointmentId;
    appointment.doctorId = doctorId;

    // Insert the appointment into the database
    const result = await db.collection("appointment").insertOne(appointment);

    res.status(201).json({
      message: "Appointment added successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding appointment" });
  }
};

module.exports = { addAppointment };
