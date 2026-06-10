import {
  create
} from "./chunk-2B3RGBY4.js";

// src/http/controllers/product/routes.ts
async function productRoutes(app) {
  app.post("/product", create);
}

export {
  productRoutes
};
