import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const removeAllContacts = async () => {
    try {
    const content = [];
    return fs.writeFile(PATH_DB, JSON.stringify(content));}
 catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
