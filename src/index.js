import app from "./app.js"
import { config } from "./config.js"
import { logger } from './logger.js'

const PORT = config.PORT || 3000

app.listen(PORT, () => {
  logger.info(`-[APP] app running at localhost:${PORT}`)
})
