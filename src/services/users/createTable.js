import { openDb } from "../../db/index.js";
import { logger } from "../../logger.js";

export const createTable = () => {
  try {
    openDb().then((db) => {
      db.exec(`
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY UNIQUE,
          name TEXT,
          nickname TEXT UNIQUE,
          email TEXT UNIQUE,
          password TEXT,
          create_at DATE DEFAULT (datetime('now', 'localtime'))
        );
      `);
    });
    logger.info(`-[DB] users table`)
  } catch (error) {
    logger.error(`-[DB] error creating user table`)
  }
}
