const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/K1_Shop");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connect };
