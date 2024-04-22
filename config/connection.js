const mongoose = require("mongoose");

const connection = () => {
  const databaseName = "MovieTicket_Ecommerce";
  mongoose
    .connect(
      `mongodb+srv://trongnghia:root@cluster0.byi93hs.mongodb.net/${databaseName}?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Connection established");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connection;
