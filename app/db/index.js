// Importing the db module will run this file, which will create a
// persistent database connection

const mongoose = require("mongoose")

const { DB_URI } = require("../config")

// successfulConnectionMessage is the message logged when a successful conenction
// to the database has been made
const successfulConnectionMessage = "Successfully connected to the database!"

// Create persistent conection to the database
// useNewUrlParser removes a mongoose deprecation warning
mongoose.connect(
  DB_URI,
  {
    useNewUrlParser: true
  }
)

// On error connecting to the database, log error
mongoose.connection.on("error", err => console.log(err))

// On successful connection to the db, log success message
mongoose.connection.once("open", () => console.log(successfulConnectionMessage))

// Exports models within this module
module.exports = {
  Page: require("./Page.js")
}
