const patients = require("./data/patients.json");
const doctors = require("./data/doctors.json");
const appointment = require("./data/appointment.json");

const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// creates a new client
const client = new MongoClient(MONGO_URI, options);

const addPatients = async (req, res) => {
  try {
    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("HCC");
    console.log("Connected to MongoDB!");

    // generate a unique ID for each patient and add it to the document
    const patientsWithIds = patients.map((patient) => ({
      ...patient,
      _id: uuidv4(),
    }));

    // insert the patients into the 'patients' collection
    const result = await db.collection("patients").insertMany(patientsWithIds);

    // On success, send a response
    console.log(
      `Successfully added ${result.insertedCount} patients to MongoDB`
    );
    //res.status(201).json({ status: 201, data: req.body });
  } catch (err) {
    // on failure/error, send an error response
    console.log("Error:", err);
    //res.status(500).json({ status: 500, data: req.body, message: err.message });
  }

  // close the connection to the database server
  await client.close();
  console.log("Disconnected from MongoDB!");
};

const addDoctors = async (req, res) => {
  try {
    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("HCC");
    console.log("Connected to MongoDB!");

    // generate a unique ID for each doctor and add it to the document
    const doctorsWithIds = doctors.map((doctor) => ({
      ...doctor,
      _id: uuidv4(),
    }));

    // insert the doctors into the 'doctors' collection
    const result = await db.collection("doctors").insertMany(doctorsWithIds);

    // On success, send a response
    console.log(`Successfully added ${result} doctors to MongoDB`);
    //res.status(201).json({ status: 201, data: req.body });
  } catch (err) {
    // on failure/error, send an error response
    console.log("Error:", err);
    //res.status(500).json({ status: 500, data: req.body, message: err.message });
  }

  // close the connection to the database server
  await client.close();
  console.log("Disconnected from MongoDB!");
};

const addAppointment = async (req, res) => {
  try {
    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("HCC");
    console.log("Connected to MongoDB!");

    // generate a unique ID for the appointment and add it to the document
    const appointmentWithId = {
      ...appointment,
      _id: uuidv4(),
    };

    // insert the appointment into the 'appointment' collection
    const result = await db
      .collection("appointment")
      .insertOne(appointmentWithId);

    // On success, send a response
    console.log(`Successfully added ${result}the appointment to MongoDB`);
  } catch (err) {
    // on failure/error, send an error response
    console.log("Error:", err);
    //res.status(500).json({ status: 500, data: req.body, message: err.message });
  }

  // close the connection to the database server
  await client.close();
  console.log("Disconnected from MongoDB!");
};
// addPatients();
addDoctors();
// addAppointment();
// module.exports = { addPatients, addDoctors, addAppointment };
