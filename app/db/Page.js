const mongoose = require("mongoose")

// collectionName will be the name of the collection in the database
const collectionName = "Page"

// Comment defines the schema for a comment
const Comment = new mongoose.Schema({
  name: { type: String, minLength: 1, default: "anonymous" },
  message: { type: String, minLength: 1 }
})

// Page defines the schema for a page
const Page = new mongoose.Schema({
  title: { type: String, required: true, minLength: 1 },
  slug: { type: String, required: true, minLength: 1 },

  contributors: { type: [String], default: [] },

  tags: { type: [String], default: [] },

  comments: { type: [Comment], default: [] },

  content: { type: String, required: true, minLength: 1 }
})

module.exports = mongoose.model(collectionName, Page)
