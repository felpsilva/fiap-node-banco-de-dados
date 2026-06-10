import {
  database
} from "./chunk-HJIMPGFH.js";

// src/repositories/pg/user.repository.ts
var UserRepository = class {
  async create({ username, password }) {
    const result = await database.clientInstance?.query(
      `INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password]
    );
    return result?.rows[0];
  }
  async findWithPersonId(userId) {
    const result = await database.clientInstance?.query(
      `SELECT * FROM "user"
            LEFT JOIN "person" ON "user".id = "person".user_id
            WHERE "user".id = $1`,
      [userId]
    );
    return result?.rows[0];
  }
};

export {
  UserRepository
};
