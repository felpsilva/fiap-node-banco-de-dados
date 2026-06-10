// src/use-cases/create-product.ts
var CreateProductUseCase = class {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }
  async handle(product) {
    return this.productRepository.create(product);
  }
};

export {
  CreateProductUseCase
};
