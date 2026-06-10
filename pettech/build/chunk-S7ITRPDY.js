import {
  AddressRepository
} from "./chunk-KTA7PCTG.js";
import {
  FindAddressByPersonUseCase
} from "./chunk-QP2TJLHJ.js";

// src/use-cases/factory/make-create-find-address-by-person.ts
function makeFindAddressByPersonUseCase() {
  const addressRepository = new AddressRepository();
  const findAddressByPersonUseCase = new FindAddressByPersonUseCase(addressRepository);
  return findAddressByPersonUseCase;
}

export {
  makeFindAddressByPersonUseCase
};
