import { createConfig } from "express-zod-api"
import 'dotenv/config'


export const config = createConfig({
    server: {
        listen: process.env.PORT || 3000,
    },
    cors: true,
    logger: {
        level: "debug",
        color: true,
    },
    startupLogo: false,
})
