var mongoose = require("mongoose");

// SCHEMA SETUP
var mindaySchema = new mongoose.Schema({
   name: String,
   day: String,
   month: String
});

module.exports = mongoose.model("MInDay", mindaySchema);