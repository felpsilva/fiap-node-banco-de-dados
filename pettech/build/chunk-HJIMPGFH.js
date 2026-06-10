import {
  env
} from "./chunk-WO32MHLH.js";

// src/lib/pg/db.ts
import { Pool } from "pg";
var CONFIG = {
  user: env.DATABASE_USER,
  host: env.DATABASE_HOST,
  database: env.DATABASE_NAME,
  password: env.DATABASE_PASSWORD,
  port: env.DATABASE_PORT
};
var Database = class {
  constructor() {
    this.pool = new Pool(CONFIG);
    this.connection();
  }
  async connection() {
    try {
      this.client = await this.pool.connect();
    } catch (error) {
      console.error(`Erro ao conectar ao banco de dados: ${error}`);
      throw new Error(`Erro ao conectar ao banco de dados: ${error}`);
    }
  }
  get clientInstance() {
    return this.client;
  }
};
var database = new Database();

export {
  database
};
