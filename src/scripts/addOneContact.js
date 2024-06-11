import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

// У файлі src/scripts/addOneContact.js опишіть функцію addOneContact.
//  Вона має додавати до масиву у файлі src/db/db.json лише один згенерований контакт.
//   Забезпечте правильне додавання одного контакту до масиву, збереження змін у файлі.

// 2. Call createFakeContact
// 2a. Read array from file db.json
// 2b. Concat new and old array
// 2c. JSON.stringify()
// 4. Whrite (POST?) into src/db/db.json

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
