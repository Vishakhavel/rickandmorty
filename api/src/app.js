const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const locationRoutes = require("./routes/locationRoutes");
const characterRoutes = require("./routes/characterRoutes");
const episideRoutes = require("./routes/episideRoutes");

app.use(express.json());

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.use("/locations", locationRoutes);
app.use("/characters", characterRoutes);
app.use("/episodes", episideRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

module.exports = app;
