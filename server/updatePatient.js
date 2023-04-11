const { MongoClient } = require("mongodb");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const updatePatient = async (req, res) => {
  const patientId = req.params.patientId;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("HCC");
    const patient = await db.collection("patients").findOne({ _id: patientId });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const update = req.body;
    const result = await db
      .collection("patients")
      .updateOne({ _id: patientId }, { $set: update });

    res.status(200).json({ message: "Patient updated", data: result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error updating patient" });
  } finally {
    client.close();
  }
};

module.exports = { updatePatient };
