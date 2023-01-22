import { randomUUID } from "node:crypto"
import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";

import { checkIfUserAlreadyHasProfile } from "./checkIfUserAlreadyHasProfile.js";

export const createProfile = async (body, userId) => {
  const profileUser = await checkIfUserAlreadyHasProfile(userId)

  if(profileUser) return "you already have a profile"

  const { 
      messagemStatus,
      status,
      bio,
      telephone,
      birthDate,
      localization
    } = body

  const id = randomUUID()
  const imgProfile = "blank-profile-picture.png"
  const imgFrontCover = "blank-frontcover.jpg"

  try {
    
    openDb().then((db) => {
      return db.run(`
        INSERT INTO profiles 
        (
          id,
          messagemStatus,
          status,
          imgProfile,
          imgFrontCover,
          bio,
          telephone,
          birthDate,
          localization,
          userId
        ) 
        VALUES (?,?,?,?,?,?,?,?,?,?);`, [
          id,
          messagemStatus,
          status,
          imgProfile,
          imgFrontCover,
          bio,
          telephone,
          birthDate,
          localization,
          userId
        ]);
    });


    logger.info(`-[DB] profile created successfully!`)
    return "Profile created successfully!"
  } catch (error) {
    logger.error(`-[DB] error creating profile`)
    return "error creating profile"
  }
}
