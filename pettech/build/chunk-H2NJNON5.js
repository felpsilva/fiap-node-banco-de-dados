import {
  create
} from "./chunk-R5FLWN36.js";

// src/http/controllers/person/routes.ts
async function personRoutes(app) {
  app.post("/person", create);
}

export {
  personRoutes
};
