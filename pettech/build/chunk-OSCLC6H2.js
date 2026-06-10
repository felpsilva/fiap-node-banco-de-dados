import {
  PersonRepository
} from "./chunk-CHMZ3BO3.js";
import {
  CreatePersonUseCase
} from "./chunk-3R5MRDO6.js";

// src/http/controllers/person/create.ts
import { z } from "zod";
async function create(request, reply) {
  const registerBodySchema = z.object({
    cpf: z.string(),
    name: z.string(),
    birth: z.date(),
    email: z.string().email()
  });
  const { cpf, name, birth, email } = registerBodySchema.parse(request.body);
  try {
    const personRepository = new PersonRepository();
    const createPersonUseCase = new CreatePersonUseCase(personRepository);
    await createPersonUseCase.handler({ cpf, name, birth, email });
    return reply.status(201).send();
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao criar pessoa");
  }
}

export {
  create
};
