const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  Name: {
    type: "String",
    required: true,
  },
  Image: {
    type: "String",
    required: true,
  },
  Director: {
    type: "String",
    required: true,
  },
  Actor: {
    type: "String",
    required: true,
  },
  MovieType: {
    type: "String",
    required: true,
  },
  PublishDate: {
    type: Date,
    required: true,
  },
  VideoDuration: {
    type: "String",
    required: true,
  },
  Language: {
    type: "String",
    required: true,
  },
  Rated: {
    type: "String",
    required: true,
  },
  Description: {
    type: "String",
    required: true,
  },
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
