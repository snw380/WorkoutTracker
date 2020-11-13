const db = require("../models");

module.exports = {
    addWorkout: function(req,res) {
        db.Workout.create(req.body)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    },
    findAll: function(req,res) {
        db.Workout.find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Post.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        let workoutId = req.params.id;
        console.log("workoutId", workoutId)
        db.Workout.findByIdAndUpdate(workoutId, { $push: { exercises: req.body } })
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(400).json(err);
      });
    },
    remove: function(req, res) {
        db.Post.findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
};
