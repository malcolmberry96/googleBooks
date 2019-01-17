const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3004;
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

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//Directing requests to the react app 
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }); 
  
  app.listen(PORT, function() {
    console.log(`API server running on port ${PORT}!`);
  });
