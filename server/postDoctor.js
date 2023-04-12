"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid"); // Import the uuid library

const postDoctor = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("HCC");
    const collection = db.collection("doctors");

    // Initialize the new patient object
    const newDoctor = {};

    // Populate the new patient object with information from the request body
    newDoctor._id = uuidv4();
    newDoctor.username = req.body.username;
    newDoctor.password = req.body.password;
    newDoctor.name = req.body.name;
    newDoctor.specialty = req.body.address;
    newDoctor.phone = req.body.phone;
    newDoctor.email = req.body.email;

    // Check if there is an existing Doctor with the same username and password
    const existingDoctor = await collection.findOne({
      name: newDoctor.name,
      username: newDoctor.username,
      password: newDoctor.password,
    });

    if (existingDoctor) {
      // If an existing doctor is found, return an error message asking to change the username and password
      res.status(400).json({
        message:
          "Username and password combination already used. Please choose a different username and/or password.",
      });
    } else {
      // If no existing patient is found, insert the new doctor into the database and return a success message
      const result = await collection.insertOne(newDoctor);
      res
        .status(200)
        .json({ data: result, message: "New doctor added successfully!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving patient" });
  }

  client.close();
};

module.exports = { postDoctor };
