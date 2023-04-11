const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function patientSignout(req, res) {
  // Get the JWT token from the request headers
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(" ")[1] : null;

  try {
    if (!token) {
      // If the token is missing, return an error
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the JWT token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If the token is valid, delete it from the patient's token list in the database
    const client = await MongoClient.connect(MONGO_URI, options);
    const db = client.db("HCC");
    const patientsCollection = db.collection("patients");
    const result = await patientsCollection.updateOne(
      { username: decoded.username },
      { $pull: { tokens: token } }
    );

    if (result.modifiedCount === 0) {
      // If no tokens were removed, the token may have already been invalidated
      return res.status(401).json({ message: "failed sign-out " });
    }

    // If the token was removed successfully, return a success message
    return res.status(200).json({ message: "Sign-out successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
module.exports = { patientSignout };
