// DB and Server connection
require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./src/server");
const { PORT, PASSWORD, DB } = process.env;

const DEFAULT_PORT = PORT || 3001;
const URI = `mongodb+srv://Piruetricks:${PASSWORD}@cluster0.eixyc75.mongodb.net/${DB}?retryWrites=true&w=majority`;

mongoose.connect(URI).then(() => {
  console.log(`Connected to MongoDB!`);
  server.listen(DEFAULT_PORT, () => {
    console.log(`Server is listening on PORT ${DEFAULT_PORT}`);
  });
});
