// src/repositories/person.repository.ts
var PersonRepository = class {
  async findById(id) {
    return {
      id,
      cpf: "123456789",
      name: "Felipe Silva",
      birth: /* @__PURE__ */ new Date("2001-01-01"),
      email: "teste@gmail.com.br",
      user_id: 1
    };
  }
  async create(person) {
    return person;
  }
};

export {
  PersonRepository
};
