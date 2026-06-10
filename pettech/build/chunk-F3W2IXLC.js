import {
  UserRepository
} from "./chunk-5UWFO5HT.js";
import {
  CreateUserUseCase
} from "./chunk-BHUZOD6H.js";

// src/use-cases/factory/make-create-user-use-case.ts
function makeCreateUserUseCase() {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  return createUserUseCase;
}

export {
  makeCreateUserUseCase
};
