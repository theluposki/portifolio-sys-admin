import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";

export const getAll = async () => {
  try {
    return await openDb().then(async (db) => {
      return await db.all("SELECT name, nickname, email, create_at FROM users;");
    });
  } catch (error) {
    logger.error("-[DB] error fetching users")
    return { error: "error fetching users" }
  }
}
