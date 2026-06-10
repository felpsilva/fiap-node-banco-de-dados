// src/use-cases/find-address-by-person.ts
var FindAddressByPersonUseCase = class {
  constructor(addressRepository) {
    this.addressRepository = addressRepository;
  }
  async handler({ personId, page, limit }) {
    return await this.addressRepository.findAddressByPersonId(personId, page, limit);
  }
};

export {
  FindAddressByPersonUseCase
};
