"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = 9999;
const app = express();
const { getPatients } = require("./getPatients");
const { postPatients } = require("./postPatients");
const { getPatient } = require("./getPatient");
const { getDoctors } = require("./getDoctors");
const { getDoctor } = require("./getDoctor");
const { createAppointment } = require("./createAppointment");
const { drSignin } = require("./drSignin");
const { patientSignin } = require("./patientSignin");
const { getAppointment } = require("./getAppointment");
const { getAppointments } = require("./getAppointments");
const { updatePatient } = require("./updatePatient");
const { deletePatient } = require("./deletePatient");
// const { patientSignout } = require("./patientSignout");
// Below are methods that are included in express(). We chain them for convenience.
//
app
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())
  .use(cors())
  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  //
  // ---------------------------------
  // add new endpoints here 👇
  // Get All Of Patients
  .get("/api/patients", getPatients)
  //Creat New Patient
  .post("/api/patient", postPatients)
  //Get Specific Patient
  .get("/api/patients/:patientId", getPatient)
  //Creat new Patient
  .post("/api/patient", postPatients)
  //updatePatient
  .put("/api/patients/:patientId", updatePatient)
  //Delete Patient
  .delete("/api/patients/:patientId", deletePatient)
  //Get All Of Doctors
  .get("/api/doctors", getDoctors)
  //Get Specific Doctor
  .get("/api/doctors/:doctorId", getDoctor)
  //Creat Appointment
  .post("/api/appointments", createAppointment)
  //Login for Doctors
  .post("/api/doctor/signin", drSignin)
  //Login for Patients
  .post("/api/patient/signin", patientSignin)
  //logOut for patient
  // .post("/api/patients/signout", patientSignout)
  //Get Specific Appointment
  .get("/api/appointment/:appointmentId", getAppointment)
  //Get Appointments
  .get("/api/appointments", getAppointments)

  // add new endpoints here ☝️
  // ---------------------------------
  //

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(port, () => console.log(`Listening on port ${port}`));
