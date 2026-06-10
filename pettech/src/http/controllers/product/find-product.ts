import { makeFindProductUseCase } from '@/use-cases/factory/make-find-product-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function findProduct(request: FastifyRequest, response: FastifyReply) {
    const registerParamsSchema = z.object({
        id: z.coerce.string()
    })

    const { id } = registerParamsSchema.parse(request.params)

    const findProductUseCase = makeFindProductUseCase()

    const product = await findProductUseCase.handler(id)

    return response.status(200).send(product)
}