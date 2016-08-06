"use strict";
const restify = require("restify");
const checks = require("node-healthcheck");
const uuid = require("uuid").v4();

const server = restify.createServer();
const message = uuid + " version " + process.env.npm_package_version;
checks.registerEndpoints(server);

server.get("/", (req, res, next) =>{
  res.send(200, message);
});

server.listen(8080, ()=> console.log('%s listening at %s!', server.name, server.url));
