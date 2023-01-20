import UserRoutes from "./user.js"
import ProfileRoutes from "./profiles.js"
import UploadRoute from "./upload.js"

const v1 = "/api/v1"

const initRoutes = (app) => {
  app.use(`${v1}/users`, UserRoutes)
  app.use(`${v1}/profiles`, ProfileRoutes)
  app.use(`${v1}/upload`, UploadRoute)
}

export default initRoutes
