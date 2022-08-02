const express = require("express");

const server = express();

server.get("/name/:name", (request, response) => {
  response.send("Helloo " + request.params.name);
});

server.get("/", (request, response) => {
  response.send("Helloo");
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
