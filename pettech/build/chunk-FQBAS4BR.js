import {
  personRoutes
} from "./chunk-GSLFT6C2.js";

// src/app.ts
import fastify from "fastify";
var app = fastify();
app.register(personRoutes);

export {
  app
};
