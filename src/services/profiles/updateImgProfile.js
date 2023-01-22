import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";
import { removeFile } from "../../Util.js";
import { checkIfUserAlreadyHasProfile } from "./checkIfUserAlreadyHasProfile.js";

export const updateImgProfile = async (body, userId) => {

  const profileUser = await checkIfUserAlreadyHasProfile(userId)
  
  if(!profileUser) return "could not find a profile"

  const { imgProfile } = body

  try {
    
    openDb().then((db) => {
      return db.run(`
      UPDATE profiles
      SET imgProfile=?
          WHERE id=?  
      `, [
          imgProfile,
          profileUser.id
        ]);
    });


    logger.info(`-[DB] img profile updated successfully!`)

    if(profileUser.imgProfile !== "blank-profile-picture.png") {
      removeFile(`src/public/uploads/${profileUser.imgProfile}`)
    }

    return "img profile updated successfully!"
  } catch (error) {
    logger.error(`-[DB] error updating img profile`)
    return "error updating img profile"
  }
}
