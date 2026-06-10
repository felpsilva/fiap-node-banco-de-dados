import {
  create
} from "./chunk-OSCLC6H2.js";

// src/http/controllers/person/routes.ts
async function personRoutes(app) {
  app.post("/person", create);
}

export {
  personRoutes
};
