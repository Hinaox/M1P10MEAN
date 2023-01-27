const express = require("express");
const cors = require("cors");
const voitureRouter = require("./routes/voiture.route");
const userRouter = require("./routes/utilisateur.route");
const repairRouter = require("./routes/reparation.route");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", false);
module.exports = mongoose
  .connect(
    "mongodb+srv://M1P10MEAN:mdpsimple@m1p10mean.b3kaviz.mongodb.net/M1P10MEAN"
  )
  .then(() => {
    console.log("Connected!");
  })
  .catch((err) => console.log("Connection while connecting = " + err));

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use("/", voitureRouter);
app.use("/", userRouter);
app.use("/", repairRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
