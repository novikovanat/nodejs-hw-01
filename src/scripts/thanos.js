import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const contactsInArray = await fs.readFile(PATH_DB, 'utf8');
    const parsedContactsArray = JSON.parse(contactsInArray);
    const content = [];
    for (let item of parsedContactsArray) {
      if (Math.random() >= 0.5) {
        content.push(item);
      }
    }

    return fs.writeFile(PATH_DB, JSON.stringify(content));
  } catch (error) {
    console.log(error);
  }
};

await thanos();
