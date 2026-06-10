// src/use-cases/create-address.ts
var CreateAddressUseCase = class {
  constructor(addressRepository) {
    this.addressRepository = addressRepository;
  }
  async handler(address) {
    return await this.addressRepository.create(address);
  }
};

export {
  CreateAddressUseCase
};
