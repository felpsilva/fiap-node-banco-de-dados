import {
  makeCreateUserUseCase
} from "./chunk-F3W2IXLC.js";

// src/http/controllers/user/create.ts
import { z } from "zod";
async function create(request, reply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string()
  });
  const { username, password } = registerBodySchema.parse(request.body);
  const createUserUseCase = makeCreateUserUseCase();
  const user = await createUserUseCase.handler({ username, password });
  return reply.status(201).send(user);
}

export {
  create
};
