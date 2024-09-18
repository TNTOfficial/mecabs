const mongoose = require("mongoose");

connectDb().catch((err) => console.log(err));

async function connectDb() {
  const connecttion = await mongoose.connect(
    // connect method is for connect mongoose to mongodb
    "mongodb://127.0.0.1:27017/user-register" // connectionString
    // "mongodb://localhost:27017/chetan"
  );
  if (connecttion) {
    console.log(`Connected to mongodb successfully!`);
  }
}

module.exports = connectDb;
