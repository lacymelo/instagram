import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    server: {

    },
    client: {
        NEXT_PUBLIC_API_INSTAGRAM: z.string().url(),
        NEXT_PUBLIC_SOCKECT_API_API_INSTAGRAM: z.string().url()
    },
    runtimeEnv: {
        // no processo de build o next vai saber que essas variáveis estão sendo utilizadas
        NEXT_PUBLIC_API_INSTAGRAM: process.env.NEXT_PUBLIC_API_INSTAGRAM,
        NEXT_PUBLIC_SOCKECT_API_API_INSTAGRAM: process.env.NEXT_PUBLIC_SOCKECT_API_API_INSTAGRAM
    },
});