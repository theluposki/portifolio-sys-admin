import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";

export const checkIfUserAlreadyHasProfile = async (userId) => {
  try {
    return await openDb().then(async (db) => {
      return await db.get(`SELECT * FROM profiles WHERE "userId"=?;`,[userId]);
    });
  } catch (error) {
    logger.error("-[DB] Error when checking if the user already has a profile")
    return { error: "Error when checking if the user already has a profile" }
  }
}
