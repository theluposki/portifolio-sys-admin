import { randomUUID } from "node:crypto"
import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";

export const createProfile = async (body, userId) => {
  const { 
      messagemStatus,
      status,
      imgProfile,
      imgFrontCover,
      bio,
      telephone,
      birthDate,
      localization
    } = body

  const id = randomUUID()
  
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
