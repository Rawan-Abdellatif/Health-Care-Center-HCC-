"use strict";
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createAppointment = async (req, res) => {
  console.log("sting");
  const { patient_id, doctor_id, hour, date, day, reason_for_visit } = req.body;
  const client = new MongoClient(MONGO_URI, options);
  // Create a new appointment
  const newAppointment = {
    _id: uuidv4(),
    patient_id,
    doctor_id,
    date,
    day,
    hour,
    reason_for_visit,
  };

  try {
    await client.connect();
    const db = client.db("HCC");
    // Check if the patient ID is valid
    const patient = await db
      .collection("patients")
      .findOne({ _id: patient_id });
    console.log("patient", patient);
    if (!patient) {
      console.log(`Patient with ID ${patient_id} not found`);
      return res
        .status(404)
        .json({ error: `Patient with ID ${patient_id} not found` });
    }

    // Check if the doctor ID is valid
    const doctor = await db.collection("doctors").findOne({ _id: doctor_id });
    // console.log("doctor", doctor);
    if (!doctor) {
      console.log(`Doctor with ID ${doctor_id} not found`);
      return res
        .status(404)
        .json({ error: `Doctor with ID ${doctor_id} not found` });
    }
    // Check if the appointment date is within any of the doctor's schedules

    // Check if the input date is within the range of any of the doctor's schedules
    console.log("date", date);
    let isWithinSchedule = false;

    for (let i = 1; i <= 5; i++) {
      const schedule = doctor[`schedule${i}`];
      const startTime = new Date(schedule["start-date"]).getTime();
      const endTime = new Date(schedule["end-date"]).getTime();
      const inputTime = new Date(date).getTime();

      if (inputTime >= startTime && inputTime <= endTime) {
        // If input time is within the current schedule, set isWithinSchedule to true and break out of the loop
        isWithinSchedule = true;
        break;
      }
    }
    if (!isWithinSchedule) {
      // If the input time is not within any of the schedules, return an error response to the client
      return res.status(404).json({
        error: "The input date is not in the range for any of the schedules",
      });
    } else {
      console.log("day", day);
      const availableDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ];
      const workingHours = {
        Monday: { start: "10:00", end: "16:00" },
        Tuesday: { start: "10:00", end: "16:00" },
        Wednesday: { start: "10:00", end: "16:00" },
        Thursday: { start: "10:00", end: "16:00" },
        Friday: { start: "10:00", end: "16:00" },
      };

      if (day === "Saturday" || day === "Sunday") {
        // If it's a weekend day, return a response indicating that the doctor does not work on weekends
        return res.status(404).json({
          error: "The doctor does not work on weekends",
        });
      } else if (availableDays.includes(day)) {
        // If the input day is within the doctor's availability, return a success response to the client
        const inputTime = new Date();
        inputTime.setHours(Number(hour.substring(0, 2)), 0, 0);
        console.log(" inputTime", inputTime);
        const startTime = new Date();
        const startHour = workingHours[req.body.day].start;
        // console.log("satrtHour", startHour);
        startTime.setHours(Number(startHour.substring(0, 3)), 0, 0);
        // console.log("startTime", startTime);

        const endTime = new Date();
        console.log("endTime", endTime);
        const endHour = workingHours[req.body.day].end;
        console.log("endHour", endHour);
        endTime.setHours(Number(endHour.substring(0, 2)), 0, 0);
        if (inputTime < startTime || inputTime > endTime) {
          return res.status(404).json({
            error: `The doctor works from ${workingHours[day].start} to ${workingHours[day].end} on ${day}`,
          });
        } else {
          const dayAvailability = doctor.schedule5.availability[day];
          let available = false;

          dayAvailability.forEach((timeSlot) => {
            // const slotTime = new Date();
            // slotTime.setHours(Number(timeSlot.hour.substring(0, 2)), 0, 0);
            // console.log("slotTime", slotTime);
            // console.log("timeSlot", timeSlot);
            if (
              timeSlot.hour === req.body.hour &&
              timeSlot.available === true
            ) {
              available = true;
            }
          });

          if (available) {
            // }
            // Insert the new appointment into the database
            const appointments = db.collection("appointment");
            const result = await appointments.insertOne(newAppointment);
            console.log(`New appointment created with ID ${result.insertedId}`);
            res.status(200).json({
              data: newAppointment,
              message: "The time slot is available.",
            });
          } else {
            res.status(404).json({
              error: `The doctor is not available at ${inputTime} on ${day}.`,
            });
          }
        }
      }
    }
  } catch (err) {
    console.log(`Error creating appointment: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.close();
  }
};

module.exports = { createAppointment };
