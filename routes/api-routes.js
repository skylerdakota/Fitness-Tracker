// const Workout = require("../models/userModel");
// Requires in models folder and express npm package
const db = require("../models/userModel");
// const router = require("express").Router();

module.exports = (app) =>{

    // Finds all existing workouts
    app.get("/api/workouts", (req, res) => {
        db.find({})
        .then(workout => {
            workout.forEach(workout => {
                let sumDuration = 0;
                workout.exercises.forEach(exercise => {
                    sumDuration += exercise.duration;
                });
                workout.totalDuration =sumDuration;
            });
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workout/range", (req, res) => {
        db.find({})
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });

    // Creates a new workouts
    app.post ("/api/workouts", ({body}, res) =>{
        const workouts = new Workout(body);
        (workouts)=> {
            workouts.forEach(workout => {
                let sumDuration = 0;
                workout.exercises.forEach(exercise =>{
                    sumDuration += exercise.duration
                });
                workout.totalDuration =sumDuration;
            });
        }
        db.create(workouts)
        .then((workout => {
            res.json(workout);
        })).catch(err => {
            res.json(err);
        });
    });

    // Updates workouts
    app.put ("/api/workouts:id", (req, res) =>{
        db.findOneAndAndUpdate(
            {_id: req.params.id},
            {$push: {exercises: req.body}},
            {new: true}
        )
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
}