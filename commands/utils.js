import fs from 'fs-extra';

/**
 * Ensures the given folder path exists, creating it if necessary.
 * @param {string} dir - The directory path to ensure exists.
 */
export function ensureFolder(dir) {
  fs.ensureDirSync(dir);
}
