import 'dotenv/config';

import { z } form 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().default(3000),
})

const _env = envSchema.safeParse(process.env);

if(!_en.success) {
    console.error('Variáveis de ambiente inválidas', _env.error.format());
    throw new Error('Variáveis de ambiente inválidas')
}

export const env = _env.data;