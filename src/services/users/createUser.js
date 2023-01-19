import { randomUUID } from "node:crypto"
import bcrypt from "bcryptjs"
import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";

export const createUser = async (body) => {

  const id = randomUUID()

  const { name, nickname, email, password } = body

  const passwordHash = await bcrypt.hash(password, 10)
  
  try {
    
    openDb().then((db) => {
      return db.run(`
        INSERT INTO users 
        (id, name, nickname, email, password) 
        VALUES (?,?,?,?,?);`, [ id, name, nickname, email, passwordHash]);
    });


    logger.info(`-[DB] Successfully registered!`)
    return "Successfully registered!"
  } catch (error) {
    logger.error(`-[DB] error registering user`)
    return "error registering user"
  }
}
