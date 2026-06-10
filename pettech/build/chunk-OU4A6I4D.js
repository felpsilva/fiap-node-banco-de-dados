import {
  ProductAutoGenerateUUID1780532109501
} from "./chunk-SFQ55JZE.js";
import {
  Product
} from "./chunk-WX2FWMMG.js";
import {
  Category
} from "./chunk-X45KHMTD.js";
import {
  env
} from "./chunk-WO32MHLH.js";

// src/lib/typeorm/typeorm.ts
import { DataSource } from "typeorm";
var appDataSource = new DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Product, Category],
  migrations: [ProductAutoGenerateUUID1780532109501],
  logging: env.NODE_ENV === "development"
});
appDataSource.initialize().then(() => {
  console.log("Database with TypeORM connected");
}).catch((error) => {
  console.error("Error connecting to the database with TypeORM", error);
});

export {
  appDataSource
};
