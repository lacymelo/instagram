import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    server: {
        API_INSTAGRAM: z.string().url()
    },
    // client: {

    // },
    runtimeEnv: {
        // no processo de build o next vai saber que essas variáveis estão sendo utilizadas
        API_INSTAGRAM: process.env.API_INSTAGRAM
    },
});