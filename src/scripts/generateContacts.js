// import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs';


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

  const pathToWorkDir= path.join(process.cwd());
  const filePath = path.join(pathToWorkDir,'//src//db//db.json');
  fs.readFile(filePath, (err, fileContent) => {
    console.log('====================================');
    console.log(fileContent);
    console.log('====================================');
  });

};

await generateContacts(5);
