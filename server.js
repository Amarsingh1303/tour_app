const express = require("express");
const bodyParser = require("body-parser");

const placeRoutes = require("./routes/place-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();
app.use(bodyParser.json());

app.use("/api/places", placeRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  next(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "something went wrong" });
});

app.listen(5000, () => {
  console.log("server running on 5000");
});
