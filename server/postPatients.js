"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid"); // Import the uuid library

const postPatients = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("HCC");
    const collection = db.collection("patients");

    // Initialize the new patient object
    const newPatient = {};

    // Populate the new patient object with information from the request body
    newPatient._id = uuidv4();
    newPatient.username = req.body.username;
    newPatient.password = req.body.password;
    newPatient.name = req.body.name;
    newPatient.age = req.body.age;
    newPatient.gender = req.body.gender;
    newPatient.address = req.body.address;
    newPatient.phone = req.body.phone;
    newPatient.email = req.body.email;
    newPatient.medical_history = req.body.medical_history;

    // Check if there is an existing patient with the same username and password
    const existingPatient = await collection.findOne({
      name: newPatient.name,
      username: newPatient.username,
      password: newPatient.password,
    });

    if (existingPatient) {
      // If an existing patient is found, return an error message asking to change the username and password
      res.status(400).json({
        message:
          "Username and password combination already used. Please choose a different username and/or password.",
      });
    } else {
      // If no existing patient is found, insert the new patient into the database and return a success message
      const result = await collection.insertOne(newPatient);
      res
        .status(200)
        .json({ data: result, message: "New patient added successfully!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving patient" });
  }

  client.close();
};

module.exports = { postPatients };
