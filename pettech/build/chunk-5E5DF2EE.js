import {
  addressRoutes
} from "./chunk-UW6QWCVA.js";
import {
  productRoutes
} from "./chunk-HQ4XKX77.js";
import {
  userRoutes
} from "./chunk-6U36O337.js";
import {
  personRoutes
} from "./chunk-H2NJNON5.js";
import {
  globalErrorHandler
} from "./chunk-XA5EO7WK.js";

// src/app.ts
import "reflect-metadata";
import fastify from "fastify";
var app = fastify();
app.register(personRoutes);
app.register(userRoutes);
app.register(addressRoutes);
app.register(productRoutes);
app.setErrorHandler(globalErrorHandler);

export {
  app
};
