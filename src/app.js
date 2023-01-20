import express from "express"
import cors from "cors"
import morgan from "morgan"

import initRoutes from "./routes/index.js"
import { initTables } from "./services/initTables.js"

const app = express()

app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", express.static("src/public"))

initRoutes(app)
initTables()

export default app
