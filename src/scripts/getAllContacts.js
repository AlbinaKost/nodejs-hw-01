import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const getAllContacts = async () => {
    try {
        const contacts = JSON.parse(await fs.readFile(PATH_DB));
        return contacts;
    } catch (error) {
        console.log(error);
    }
};

console.log(await getAllContacts());
