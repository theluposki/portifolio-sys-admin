import UserRoutes from "./user.js"

const v1 = "/api/v1"

const initRoutes = (app) => {
  app.use(`${v1}/users`, UserRoutes)
}

export default initRoutes
