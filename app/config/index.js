// devConfig contains production level configuration variables
const devConfig = require("./development.json")

// prodConfig contains production level configuration variables
const prodConfig = {
  DB_URI: process.env.DB_URI
}

// Export configuratino based on NODE_ENV environment variable
if (process.env.NODE_ENV === "production") {
  module.exports = prodConfig
} else {
  module.exports = devConfig
}
