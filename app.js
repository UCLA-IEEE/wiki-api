const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const parser = require("body-parser")

const db = require("./app/db")
const { pageRouter, baseRouter } = require("./app/routes")

const app = express()

app.set("port", process.env.PORT || 3000)
app.use(morgan("dev"))
app.use(cors())
app.use(parser.json())

// Connect routers
app.use(pageRouter)
app.use(baseRouter)

app.get("/search", function(req, res) {
  console.log(req.query)
  console.log(req.query.query)
  let pages = [
    {
      title: "Email Forwarding",
      slug: "email-forwarding",
      contributors: ["Jeffrey Chan", "Kathy Daniels"],
      content: "<h1>EMAIL FORWARDING AND ALIASING</h1> <p>Written by Jeffrey Chan</p>"
    },
    {
      title: "Joining IEEE",
      slug: "joining-ieee",
      contributors: ["Jeffrey Chan", "Kathy Daniels"],
      content: "<h1>EMAIL FORWARDING AND ALIASING</h1> <p>Written by Jeffrey Chan</p>"
    },
    {
      title: "Webmaster 101",
      slug: "webmaster",
      contributors: ["Jeffrey Chan", "Kathy Daniels"],
      content: "<h1>EMAIL FORWARDING AND ALIASING</h1> <p>Written by Jeffrey Chan</p>"
    }
  ]
  res.json(pages)
})

app.get("/user/:email", function(req, res) {
  console.log(req.params.email)
  let user = {
    firstName: "Jeffrey",
    lastName: "Chan",
    email: "jeffxchan@gmail.com"
  }
  res.json(user)
})

app.listen(app.get("port"), function() {
  console.log(`Started server at port ${app.get("port")}.`)
})
