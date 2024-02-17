import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
import { config } from 'dotenv'

// altera o arquivo de configuração das variáveis de ambiente
if (process.env.NODE_ENV === 'test') {
    config({ path: 'env.test' })
} else {
    config()
}

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    },
    client: {
        NEXT_PUBLIC_API_INSTAGRAM: z.string().url().default('http://localhost:3333')
    },
    runtimeEnv: {
        // no processo de build o next vai saber que essas variáveis estão sendo utilizadas
        NEXT_PUBLIC_API_INSTAGRAM: process.env.API_INSTAGRAM,
        NODE_ENV: process.env.NODE_ENV,
    },
});