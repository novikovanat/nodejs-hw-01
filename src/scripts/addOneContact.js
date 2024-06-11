import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';


export const addOneContact = async () => {
  try {
    const previousContacts = await fs.readFile(PATH_DB, 'utf-8');
    const newFakeContact = createFakeContact();
    const previousContactsArray = JSON.parse(previousContacts);
    previousContactsArray.push(newFakeContact);
    return fs.writeFile(PATH_DB, JSON.stringify(previousContactsArray));
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
