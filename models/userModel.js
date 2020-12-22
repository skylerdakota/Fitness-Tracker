const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  day: {
    type: Date,
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter the type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter the name of exercise"
      },
      duration: {
        type: Number,
        required: "Please enter the duration of exercise"
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

// UserSchema.methods.continueWorkout = function () {
//   this.day = ${this.day};
//   return this.day;
// };

// UserSchema.methods.newWorkout = function () {
//   this.day = ${this.day};
//   return this.day;
// };

// UserSchema.methods.complete = function () {
//   this.exercises = ${this.exercises};
//   return this.exercises;
// };

// UserSchema.methods.new = function () {
//   this.exercises = ${this.exercises};
//   return this.exercises;
// };

const Workout = mongoose.model("User", workoutSchema);

module.exports = Workout;
