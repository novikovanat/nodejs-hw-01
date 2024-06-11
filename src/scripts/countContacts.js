import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const countContacts = async () => {
    try {
        const contactsInArray = await fs.readFile(PATH_DB, 'utf8');
        return JSON.parse(contactsInArray).length;
      } catch (error) {
        console.log(error);
      }
};

console.log(await countContacts());
