import fs from "node:fs"

export const removeFile = async (pathFile) => {
  fs.unlink(pathFile, function(err) {
    if(err && err.code == 'ENOENT') {
        console.info("File doesn't exist, won't remove it.");
    } else if (err) {
        console.error("Error occurred while trying to remove file");
    } else {
        console.info(`removed`); 
    }
  })
}
