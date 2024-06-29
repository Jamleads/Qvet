const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

// Connect to MongoDB Atlas
const uri =
  process.env.MONGO_URI || "your_mongodb_atlas_connection_string_here";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

// Define a schema and model
const Schema = mongoose.Schema;
const DataSchema = new Schema({
  items: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
});

const Data = mongoose.model("Data", DataSchema);

// Initialize Express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Define POST route to add a new item to the array
app.post("/data/:id", async (req, res) => {
  const { title, url } = req.body;
  const newItem = { title, url };

  try {
    const updatedData = await Data.findByIdAndUpdate(
      req.params.id,
      { $push: { items: newItem } },
      { new: true, useFindAndModify: false }
    );
    res.status(201).json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
