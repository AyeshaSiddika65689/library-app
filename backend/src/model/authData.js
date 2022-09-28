const mongoose = require("mongoose");
const url = "mongodb+srv://ayeshasiddika:ayesha321@cluster0.2k9xok7.mongodb.net/libraryDatabase";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); 

const authSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const authData = mongoose.model("authDetails", authSchema);

module.exports = authData;
