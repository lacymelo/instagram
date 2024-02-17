import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    server: {
        API_INSTAGRAM: z.string().url().default('http://localhost:3333')
    },
    client: {
        NEXT_PUBLIC_API_INSTAGRAM: z.string().url().default('http://localhost:3333')
    },
    runtimeEnv: {
        // no processo de build o next vai saber que essas variáveis estão sendo utilizadas
        NEXT_PUBLIC_API_INSTAGRAM: process.env.API_INSTAGRAM,
        API_INSTAGRAM: process.env.API,
    },
});