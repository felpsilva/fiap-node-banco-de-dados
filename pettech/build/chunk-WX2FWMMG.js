import {
  Category
} from "./chunk-X45KHMTD.js";
import {
  __decorateClass
} from "./chunk-ADS4GRIL.js";

// src/entities/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
var Product = class {
};
__decorateClass([
  PrimaryGeneratedColumn("uuid", {
    name: "id"
  })
], Product.prototype, "id", 2);
__decorateClass([
  Column({
    name: "name",
    type: "varchar"
  })
], Product.prototype, "name", 2);
__decorateClass([
  Column({
    name: "description",
    type: "text"
  })
], Product.prototype, "description", 2);
__decorateClass([
  Column({
    name: "image_url",
    type: "varchar"
  })
], Product.prototype, "image_url", 2);
__decorateClass([
  Column({
    name: "price",
    type: "double precision"
  })
], Product.prototype, "price", 2);
__decorateClass([
  ManyToMany(() => Category, {
    cascade: true
  }),
  JoinTable({
    name: "product_category",
    joinColumn: {
      name: "product_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "category_id",
      referencedColumnName: "id"
    }
  })
], Product.prototype, "categories", 2);
Product = __decorateClass([
  Entity({
    name: "product"
  })
], Product);

export {
  Product
};
