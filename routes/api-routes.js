// const Workout = require("../models/userModel");
// Requires in models folder and express npm package
const db = require("../models");
const router = require("express").Router();

    // Finds all existing workouts
    router.get("/api/workouts", (req, res) => {
        db.Workout.aggregate([{
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }])
        .sort({ day: 1 })
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    router.get("/api/workouts/range", (req, res) => {
        db.Workout.find()
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });

    // Creates a new workouts
    router.post ("/api/workouts", (req, res) =>{
        db.Workout.create({})
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });

    // Updates workouts
    router.put ("/api/workouts/:id", (req, res) =>{
        db.Workout.findByIdAndUpdate(
            { _id:req.params.id},
            { $push: {exercises: req.body}}
        )
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

module.exports = router;