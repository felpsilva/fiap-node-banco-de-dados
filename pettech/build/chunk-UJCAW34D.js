import {
  UserRepository
} from "./chunk-5UWFO5HT.js";
import {
  FindWithPersonUseCase
} from "./chunk-NDRNGLXD.js";

// src/use-cases/factory/make-find-with-person-use-case.ts
function makeFindWithPersonUseCase() {
  const userRepository = new UserRepository();
  const findWithPersonUseCase = new FindWithPersonUseCase(userRepository);
  return findWithPersonUseCase;
}

export {
  makeFindWithPersonUseCase
};
