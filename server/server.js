const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const eventRoutes=require("./routes/eventRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/events",eventRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });

  })
  .catch((err) => {
    console.log(err);
  });

