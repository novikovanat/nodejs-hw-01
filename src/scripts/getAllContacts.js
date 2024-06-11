import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

// У файлі src/scripts/getAllContacts.js опишіть функцію getAllContacts.
//  Вона має повертати масив контактів із файлу src/db/db.json.
//   Функція має коректно читати масив контактів з файлу.

// 2a. Read array from file db.json
// 2c. JSON.parse()

export const getAllContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(allContacts);
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
