import {
  database
} from "./chunk-HJIMPGFH.js";

// src/repositories/pg/person.repository.ts
var PersonRepository = class {
  async create({ cpf, name, birth, email, user_id }) {
    const result = await database.clientInstance?.query(
      `INSERT INTO "person" (cpf, name, birth, email, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [cpf, name, birth, email, user_id]
    );
    return result?.rows[0];
  }
};

export {
  PersonRepository
};
