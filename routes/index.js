const router = require("express").Router();
const controller = require("../controller/movie_controller.js");

// use multer middleware
const upload = require("../middleware/multer.js");

const routes = (app) => {
  router.get("/getAllMovies", controller.getAllMovies);
  router.post("/addMovie", controller.addMovie);
  router.get("/getMovieById/:id", controller.getMovieById);
  router.delete("/deleteMovieById/:id", controller.deleteMovieById);
  router.patch("/updateMovieById/:id", controller.updateMovieById);

  return app.use("/api", router);
};

module.exports = routes;
