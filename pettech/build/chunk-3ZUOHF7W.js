import {
  makeFindWithPersonUseCase
} from "./chunk-UJCAW34D.js";

// src/http/controllers/user/find-user.ts
import { z } from "zod";
async function findUser(request, reply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number()
  });
  const { id } = registerParamsSchema.parse(request.params);
  const findWithPersonUseCase = makeFindWithPersonUseCase();
  const user = await findWithPersonUseCase.handler(id);
  return reply.status(200).send(user);
}

export {
  findUser
};
