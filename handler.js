const express = require("express")
const serverless = require("serverless-http")
require('dotenv').config()
const apiKeyAuth = require('./src/middlewares/api_key_auth_middleware')
const { indexContacts, showContact, saveContact } = require("./src/controllers/contact_controller")

const app = express()
app.use(express.json())

app.get("/users", apiKeyAuth, indexContacts)
app.get("/users/:email", apiKeyAuth, showContact)
app.post("/users", saveContact)

app.use((req, res, next) => {
    return res.status(404).json({ error: "Not Found", })
})

exports.handler = serverless(app)
