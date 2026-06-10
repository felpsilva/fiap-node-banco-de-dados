import {
  makeCreateProductUseCase
} from "./chunk-UXLXBUSP.js";

// src/http/controllers/product/create.ts
import z from "zod";
async function create(request, reply) {
  const registerBodySchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    image_url: z.string(),
    price: z.coerce.number(),
    categories: z.array(
      z.object({
        id: z.coerce.number().optional(),
        name: z.string()
      })
    ).optional()
  });
  const { id, name, description, image_url, price, categories } = registerBodySchema.parse(request.body);
  const createProductUseCase = makeCreateProductUseCase();
  const product = await createProductUseCase.handle({
    id,
    name,
    description,
    image_url,
    price,
    categories
  });
  return reply.status(201).send(product);
}

export {
  create
};
