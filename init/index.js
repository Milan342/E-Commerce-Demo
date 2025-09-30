const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// Load environment variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Use Atlas URL from .env file
const MONGO_URL =
  process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/ecommerce-demo";

main()
  .then(() => {
    console.log(`connected to DB`);
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Use the actual user ID from your database
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67361689f88d752dac459a2b", // This is the actual user ID from your output
  }));

  await Listing.insertMany(initData.data);
  console.log(`data was initialized`);
};

initDB();
