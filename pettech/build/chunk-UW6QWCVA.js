import {
  findAddress
} from "./chunk-DUWQWHY5.js";
import {
  create
} from "./chunk-ZWAOU63M.js";

// src/http/controllers/address/routes.ts
async function addressRoutes(app) {
  app.post("/address", create);
  app.get("/address/person/:personId", findAddress);
}

export {
  addressRoutes
};
