import {
  makeFindAddressByPersonUseCase
} from "./chunk-S7ITRPDY.js";

// src/http/controllers/address/find-address.ts
import z from "zod";
async function findAddress(request, reply) {
  const registerParamsSchema = z.object({
    personId: z.coerce.number()
  });
  const registerQuerySchema = z.object({
    page: z.coerce.number(),
    limit: z.coerce.number()
  });
  const { personId } = registerParamsSchema.parse(request.params);
  const { page, limit } = registerQuerySchema.parse(request.query);
  const findAddressByPersonUseCase = makeFindAddressByPersonUseCase();
  const addresses = await findAddressByPersonUseCase.handler({ personId, page, limit });
  reply.status(200).send(addresses);
}

export {
  findAddress
};
