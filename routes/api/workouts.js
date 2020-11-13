const router = require("express").Router();
const userController = require("../../controllers/userController")

// Matches with "/api/workouts"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.addWorkout);

  // Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;