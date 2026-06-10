import {
  AddressRepository
} from "./chunk-KTA7PCTG.js";
import {
  CreateAddressUseCase
} from "./chunk-HZ3DCHGQ.js";

// src/use-cases/factory/make-create-address-use-case.ts
function makeCreateAddressUseCase() {
  const addressRepository = new AddressRepository();
  const createAddressUseCase = new CreateAddressUseCase(addressRepository);
  return createAddressUseCase;
}

export {
  makeCreateAddressUseCase
};
