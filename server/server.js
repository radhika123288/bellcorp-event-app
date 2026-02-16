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

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  })
  .catch((err) => {
    console.log(err);
  });

