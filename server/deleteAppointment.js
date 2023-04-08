const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const deleteAppointment = async (req, res) => {
  const appointmentId = req.params.appointmentId;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("HCC");
    const result = await db
      .collection("appointment")
      .deleteOne({ _id: appointmentId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting appointment" });
  }
  client.close();
};

module.exports = { deleteAppointment };
