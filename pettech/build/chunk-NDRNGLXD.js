import {
  ResourceNotFoundError
} from "./chunk-X5CUSXTD.js";

// src/use-cases/find-with-person.ts
var FindWithPersonUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(userId) {
    const user = await this.userRepository.findWithPersonId(userId);
    if (!user) throw new ResourceNotFoundError();
    return user;
  }
};

export {
  FindWithPersonUseCase
};
