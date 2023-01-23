import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";

export const getMyProfile = async (id) => {
  console.log(id)
  try {
    return await openDb().then(async (db) => {
      return await db.get(
        `
        SELECT 
        u.name, 
        u.nickname,
        p."messagemStatus",
        p.status,
        p."imgProfile",
        p."imgFrontCover",
        p.bio,
        p.telephone,
        p."birthDate",
        p.localization,
        u.create_at
        FROM profiles AS p
        INNER JOIN users AS u ON p."userId" = u.id WHERE u.id = ?;  
        `, [id]);
    });
  } catch (error) {
    logger.warn(`-[DB] error fetching user`)
    return "error fetching user"
  }
}
