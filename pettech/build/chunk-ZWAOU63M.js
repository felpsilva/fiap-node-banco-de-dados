import {
  makeCreateAddressUseCase
} from "./chunk-6HRTTBSG.js";

// src/http/controllers/address/create.ts
import z from "zod";
async function create(request, reply) {
  const registerBodySchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip_code: z.string(),
    person_id: z.number()
  });
  const { street, city, state, zip_code, person_id } = registerBodySchema.parse(request.body);
  const createAddressUseCase = makeCreateAddressUseCase();
  const address = await createAddressUseCase.handler({ street, city, state, zip_code, person_id });
  reply.status(201).send(address);
}

export {
  create
};
