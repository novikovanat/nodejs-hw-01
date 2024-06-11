import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

// У файлі src/scripts/generateContacts.js опишіть функцію
// generateContacts. Вона має за допомогою функції createFakeContact,
//  створювати передану кількість згенерованих контактів,
//   а потім додавати їх до масиву у файлі src/db/db.json
//   і записувати їх назад у файл src/db/db.json.

// 1.Pass number of contacts
// 2. Call createFakeContact
// 2a. Read array from file db.json
// 2b. Concat new and old array
// 2c. JSON.stringify()
// 4. Whrite (POST?) into src/db/db.json

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
