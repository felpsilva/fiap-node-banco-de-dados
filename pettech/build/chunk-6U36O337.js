import {
  create
} from "./chunk-BJKV5VUR.js";
import {
  findUser
} from "./chunk-3ZUOHF7W.js";

// src/http/controllers/user/routes.ts
async function userRoutes(app) {
  app.get("/user/:id", findUser);
  app.post("/user", create);
}

export {
  userRoutes
};
