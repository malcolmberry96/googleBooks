const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();
const routes = require("./routes/routes");

//middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
//Static assets 
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}
app.use(logger("dev"));
//Use apiRoutes
app.use("/api",routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

const dbRoute = "mongodb://<malcolm96>:<lolcrackers3>@ds163354.mlab.com:63354/heroku_fl2x0v0k";


mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.log.error.bind(console, "MongoDB connection error:"));

//Directing requests to the react app 
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }); 
  
  app.listen(PORT, function() {
    console.log(`API server running on port ${PORT}!`);
  });
