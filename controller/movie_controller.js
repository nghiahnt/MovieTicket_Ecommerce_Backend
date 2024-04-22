const Movie = require("../model/movie");

const movieController = {
  getAllMovies: async (req, res, next) => {
    try {
      const data = await Movie.find();
      const result = {
        status: 200,
        message: "Get all movies successfully",
        data: data,
      };
      return res.status(result.status).json(result);
    } catch (error) {
      next(error);
    }
  },

  addMovie: async (req, res, next) => {
    try {
      const data = req.body;
      const newMovie = new Movie({
        Name: data.name,
        Image: data.image,
        Director: data.director,
        Actor: data.actor,
        MovieType: data.movieType,
        PublishDate: data.publishDate,
        VideoDuration: data.videoDuration,
        Language: data.language,
        Rated: data.rated,
        Description: data.description,
      });
      newMovie.save();
      return res.status(201).json({
        status: 201,
        message: "Movie added successfully",
        data: newMovie,
      });
    } catch (error) {
      next(error);
    }
  },

  // Get movie by id
  getMovieById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await Movie.findById(id);
      const result = {
        status: 200,
        message: "Get movie by id successfully",
        data: data,
      };
      return res.status(result.status).json(result);
    } catch (error) {
      next(error);
    }
  },

  // Update movie
  updateMovieById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updateMovieData = {
        Name: data.name,
        Image: data.image,
        Director: data.director,
        Actor: data.actor,
        MovieType: data.movieType,
        PublishDate: data.publishDate,
        VideoDuration: data.videoDuration,
        Language: data.language,
        Rated: data.rated,
        Description: data.description,
      };
      const updateMovie = await Movie.findByIdAndUpdate(id, updateMovieData, {
        new: true,
      });
      const result = {
        status: 200,
        message: "Update movie by id successfully",
        data: updateMovie,
      };
      return res.status(result.status).json(result);
    } catch (error) {
      next(error);
    }
  },

  // Delete movie by id
  deleteMovieById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await Movie.findByIdAndDelete(id);
      const result = {
        status: 200,
        message: "Delete movie by id successfully",
        data: data,
      };
      return res.status(result.status).json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = movieController;
