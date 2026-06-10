import {
  ProductRepository
} from "./chunk-EY2656TM.js";
import {
  CreateProductUseCase
} from "./chunk-43IQYNT3.js";

// src/use-cases/factory/make-create-product-use-case.ts
function makeCreateProductUseCase() {
  const productRepository = new ProductRepository();
  const createProductUseCase = new CreateProductUseCase(productRepository);
  return createProductUseCase;
}

export {
  makeCreateProductUseCase
};
