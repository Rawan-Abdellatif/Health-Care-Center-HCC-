const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const adminsignin = async (req, res) => {
  const { username, password } = req.body;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("HCC");
    const collection = db.collection("Admins");

    const userData = await collection.findOne({ username, password });

    if (userData) {
      // If the patient is found, compare the hashed password with the input password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const passwordHash = await bcrypt.hash(password, salt);
      const match = await bcrypt.compare(userData.password, passwordHash);
      if (match) {
        // If the credentials are correct, create a JWT token and return it
        const token = jwt.sign({ username }, process.env.JWT_SECRET);

        return res.status(200).json({
          message: "Sign-in successful",
          data: { token: token, adminId: userData._id },
        });
      }
    }
    // If the credentials are incorrect or the doctor doesn't exist, return an error message
    return res.status(401).json({ message: "Invalid username or password" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  } finally {
    await client.close();
  }
};
module.exports = { adminsignin };
