const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "https://laplux.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());

// MongoDB Connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("laplux-assignment");
    const laptopcollection = db.collection("laptops");

    //* Laptop Data

    //* Create
    app.post("/api/v1/laptop", async (req, res) => {
      const {
        name,
        image,
        brand,
        price,
        discount,
        flashSale,
        rating,
        ram,
        ssd,
        processor,
        display,
        os,
        description,
      } = req.body;
      const result = await laptopcollection.insertOne({
        name,
        image,
        brand,
        price,
        discount,
        flashSale,
        rating,
        ram,
        ssd,
        processor,
        display,
        os,
        description,
        createdAt: new Date(),
      });
      res.json({
        success: true,
        message: "Successfully laptop create!",
        result,
      });
    });

    //* Get ALL
    app.get("/api/v1/laptop", async (req, res) => {
      const data = await laptopcollection.find({}).toArray();
      res.json({
        success: true,
        message: "successfully retrieve laptops!",
        data,
      });
    });

    // Get Laptops by Brand
    app.get("/api/v1/laptop/brand/:brand", async (req, res) => {
      const { brand } = req.params;
      const data = await laptopcollection.find({ brand }).toArray();
      res.json({
        success: true,
        message: `Successfully retrieved laptops for brand ${brand}!`,
        data,
      });
    });

    // Get Single Laptop by ID
    app.get("/api/v1/laptop/:id", async (req, res) => {
      const { id } = req.params;
      const data = await laptopcollection.findOne(new ObjectId(id));
      res.json({
        success: true,
        message: "successfully retrieve laptop!",
        data,
      });
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } finally {
  }
}

run().catch(console.dir);

// Test route
app.get("/", (req, res) => {
  const serverStatus = {
    message: "Laplux server is running smoothly",
  };
  res.json(serverStatus);
});
