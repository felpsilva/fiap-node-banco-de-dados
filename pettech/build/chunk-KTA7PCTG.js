import {
  database
} from "./chunk-HJIMPGFH.js";

// src/repositories/pg/address.repository.ts
var AddressRepository = class {
  async findAddressByPersonId(personId, page, limit) {
    const offset = (page - 1) * limit;
    const query = `
            SELECT address.*, person.*
            FROM address
            JOIN person ON address.person_id = person.id
            WHERE person.id = $1
            LIMIT $2 OFFSET $3
        `;
    const result = await database.clientInstance?.query(query, [personId, limit, offset]);
    return result?.rows || [];
  }
  async create({ street, city, state, zip_code, person_id }) {
    const result = await database.clientInstance?.query(`
            INSERT INTO address (street, city, state, zip_code, person_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `, [street, city, state, zip_code, person_id]);
    return result?.rows[0];
  }
};

export {
  AddressRepository
};
