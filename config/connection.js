const mongoose = require("mongoose");



mongoose.connect(
  
  process.env.MONGODB_URI || "mongodb+srv://mohamedahmedsaleh50:mohamedsaleh@cluster0.hsxwad8.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;
