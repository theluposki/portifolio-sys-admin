import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";

export const createTableProfile = () => {
  try {
    openDb().then((db) => {
      db.exec(`
        CREATE TABLE IF NOT EXISTS profiles (
          id TEXT PRIMARY KEY UNIQUE,
          messagemStatus TEXT,
          status TEXT,
          imgProfile TEXT,
          imgFrontCover TEXT,
          bio TEXT,
          telephone TEXT,
          birthDate TEXT,
          localization TEXT,
          userId TEXT NOT NULL,
          create_at DATE DEFAULT (datetime('now', 'localtime')),
          Foreign Key (userId) REFERENCES users(id)
        );
      `);
    });
    logger.info(`-[DB] profile table`)
  } catch (error) {
    logger.error(`-[DB] error creating profile table`)
  }
}
