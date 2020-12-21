const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  day: {
    type: Date,
  },

  exercises: 
    [
    {
      type: {
        type: String
      },
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
    }
    ]
});

UserSchema.methods.continueWorkout = function () {
  this.day = ${this.day};
  return this.day;
};

UserSchema.methods.newWorkout = function () {
  this.day = ${this.day};
  return this.day;
};

UserSchema.methods.complete = function () {
  this.exercises = ${this.exercises};
  return this.exercises;
};

UserSchema.methods.new = function () {
  this.exercises = ${this.exercises};
  return this.exercises;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
