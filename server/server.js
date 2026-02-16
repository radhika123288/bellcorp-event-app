const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
require("dotenv").config();

const eventRoutes = require("./routes/eventRoutes");


const app = express();

app.use(express.json());

app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://radhikasirasala6_db_user:XBbJaq3VVBGqyjE3@cluster0.vqtu1fo.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/events", eventRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

