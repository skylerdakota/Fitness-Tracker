const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethods", { useNewUrlParser: true });

app.post("/submit", ({body}, res) => {
  const user = new User(body);
  user.continueWorkout();
  user.newWorkout();
  user.complete();
  user.new();

  User.create(user)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});