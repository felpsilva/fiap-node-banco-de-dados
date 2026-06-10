import {
  PersonRepository
} from "./chunk-A3FPPOOS.js";
import {
  CreatePersonUseCase
} from "./chunk-3R5MRDO6.js";

// src/use-cases/factory/make-create-person-use-case.ts
function makeCreatePersonUseCase() {
  const personRepository = new PersonRepository();
  const createPersonUseCase = new CreatePersonUseCase(personRepository);
  return createPersonUseCase;
}

export {
  makeCreatePersonUseCase
};
