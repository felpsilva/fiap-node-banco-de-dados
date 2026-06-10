// src/use-cases/create-user.ts
var CreateUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(user) {
    return await this.userRepository.create(user);
  }
};

export {
  CreateUserUseCase
};
