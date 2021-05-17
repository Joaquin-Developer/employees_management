
const mongoose = require("mongoose")
// db connection params (user, password, etc):
const config = require("./config/database.config")

const url = ` mongodb://${config.user}:${config.pass}@${config.host}:${config.port}/${config.name}` 

mongoose
    .connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log("MongoDB Connected!"))
    .catch(error => console.log("Error:", error.toString()))
