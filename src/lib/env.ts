import { z } from "zod"

const envSchema = z.object({
	DATABASE_URL: z.string(),
	AUTH_SECRET: z.string(),
	AUTH_DISCORD_ID: z.string(),
	AUTH_DISCORD_SECRET: z.string().optional(),
	NODE_ENV: z.string().default("development"),
})

export const env = envSchema.parse(process.env)
