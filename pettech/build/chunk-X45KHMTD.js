import {
  __decorateClass
} from "./chunk-ADS4GRIL.js";

// src/entities/category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
var Category = class {
};
__decorateClass([
  PrimaryGeneratedColumn("increment", {
    name: "id"
  })
], Category.prototype, "id", 2);
__decorateClass([
  Column({
    name: "name",
    type: "varchar"
  })
], Category.prototype, "name", 2);
__decorateClass([
  Column({
    name: "created_at",
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
], Category.prototype, "createdAt", 2);
Category = __decorateClass([
  Entity({
    name: "category"
  })
], Category);

export {
  Category
};
