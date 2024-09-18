const express = require("express"); //to make the server
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./db/connections"); //to connect with database
const router = require("./router");
const PORT = 3000;
const server = express();

connectDb();
server.use(cors);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get("/backend", (req, res) => {
  res.send("Hello, Welcome to Express js");
});

server.use(cors);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
