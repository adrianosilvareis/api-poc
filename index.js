// server.js
require('dotenv/config');

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db/database.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT ?? 3001, () => {
  console.log("JSON Server is running");
});

console.log(`Server running at process.env.PORT http://localhost:${process.env.PORT}/`)