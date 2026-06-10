import {
  makeCreatePersonUseCase
} from "./chunk-WCZGBWCP.js";

// src/http/controllers/person/create.ts
import { z } from "zod";
async function create(request, reply) {
  const registerBodySchema = z.object({
    cpf: z.string(),
    name: z.string(),
    birth: z.coerce.date(),
    email: z.string().email(),
    user_id: z.coerce.number()
  });
  const { cpf, name, birth, email, user_id } = registerBodySchema.parse(request.body);
  const createPersonUseCase = makeCreatePersonUseCase();
  const person = await createPersonUseCase.handler({ cpf, name, birth, email, user_id });
  return reply.status(201).send(person);
}

export {
  create
};
