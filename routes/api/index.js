const router = require("express").Router();
const workoutsRoutes = require("./workouts");

// Post routes
router.use("/workouts", workoutsRoutes);

module.exports = router;
