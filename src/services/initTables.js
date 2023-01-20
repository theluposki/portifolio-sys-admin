import { createTable } from "./users/createTable.js";
import { createTableProfile } from "./profiles/createTable.js";

export const initTables = () => {
  createTable()
  createTableProfile()
} 
