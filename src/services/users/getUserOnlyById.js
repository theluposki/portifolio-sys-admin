import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";

export const getUserOnlyById = async (id) => {
  try {
    return await openDb().then(async (db) => {
      return await db.get("SELECT * FROM users WHERE id=?", [id]);
    });
  } catch (error) {
    logger.warn(`-[DB] error fetching user`)
    return "error fetching user"
  }
}
