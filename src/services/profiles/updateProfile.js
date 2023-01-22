import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";
import { checkIfUserAlreadyHasProfile } from "./checkIfUserAlreadyHasProfile.js";

export const updateProfile = async (body, userId) => {

  const profileUser = await checkIfUserAlreadyHasProfile(userId)

  if(!profileUser) return "you don't have a profile"

  const { 
      messagemStatus,
      status,
      bio,
      telephone,
      birthDate,
      localization
  } = body

  try {
    
    openDb().then((db) => {
      return db.run(`
      UPDATE profiles
      SET messagemStatus=?,
          status=?,
          bio=?,
          telephone=?,
          birthDate=?,
          localization=?
          WHERE id=?  
      `, [
          messagemStatus,
          status,
          bio,
          telephone,
          birthDate,
          localization,
          profileUser.id
        ]);
    });


    logger.info(`-[DB] profile updated successfully!`)
    return "profile updated successfully!"
  } catch (error) {
    logger.error(`-[DB] error updating profile`)
    return "error updating profile"
  }
}
