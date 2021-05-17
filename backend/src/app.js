const express = require("express")
const app = express()

// settings:
app.set("port", process.env.PORT || 5000)

app.use(express.json())

// routes:
app.use("/api/employees", require("./routes/employees.routes"))

// 404 not found requests:
app.use((request, response, next) => {
    response.status(404).send("404 not found")
});

module.exports = app
