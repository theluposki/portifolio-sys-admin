import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";
import { removeFile } from "../../Util.js";
import { checkIfUserAlreadyHasProfile } from "./checkIfUserAlreadyHasProfile.js";

export const updateImgFrontCover = async (body, userId) => {

  const profileUser = await checkIfUserAlreadyHasProfile(userId)
  
  if(!profileUser) return "could not find a profile"

  const { imgFrontCover } = body

  try {
    
    openDb().then((db) => {
      return db.run(`
      UPDATE profiles
      SET imgFrontCover=?
          WHERE id=?  
      `, [
          imgFrontCover,
          profileUser.id
        ]);
    });


    logger.info(`-[DB] img FrontCover updated successfully!`)

    if(profileUser.imgFrontCover !== "blank-frontcover.jpg") {
      removeFile(`src/public/uploads/${profileUser.imgFrontCover}`)
    }

    return "img FrontCover updated successfully!"
  } catch (error) {
    logger.error(`-[DB] error updating img FrontCover`)
    return "error updating img FrontCover"
  }
}
