import {
  appDataSource
} from "./chunk-OU4A6I4D.js";
import {
  Product
} from "./chunk-WX2FWMMG.js";

// src/repositories/typeorm/product.repository.ts
var ProductRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Product);
  }
  create(product) {
    return this.repository.save(product);
  }
};

export {
  ProductRepository
};
