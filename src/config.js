import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET
}
