import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  const newFakeContacts = [];
  for (let i = 0; i < number; i++) {
    newFakeContacts.push(createFakeContact());
  }
  try {
    const contactsInArray = await fs.readFile(PATH_DB, 'utf8');
    const content = newFakeContacts.concat(JSON.parse(contactsInArray));
    return fs.writeFile(PATH_DB, JSON.stringify(content));
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
