import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const removeLastContact = async () => {
  try {
    const contactsInArray = await fs.readFile(PATH_DB, 'utf8');
    const parsedContactsArray = JSON.parse(contactsInArray);
    parsedContactsArray.length = parsedContactsArray.length - 1;
    return fs.writeFile(PATH_DB, JSON.stringify(parsedContactsArray));
  } catch (error) {
    console.log(error);
  }
};

await removeLastContact();
