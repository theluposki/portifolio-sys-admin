import * as dotenv from 'dotenv'
dotenv.config()

import app from "./app.js"

import { logger } from './logger.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  logger.info(`-[APP] app running at localhost:${PORT}`)
})
