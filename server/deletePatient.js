const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const deletePatient = async (req, res) => {
  const patientId = req.params.patientId;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("HCC");
    const result = await db
      .collection("patients")
      .deleteOne({ _id: patientId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting patient" });
  }
  client.close();
};
module.exports = { deletePatient };
