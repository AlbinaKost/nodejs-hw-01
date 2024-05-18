import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts';
import { createFakeContact } from '../utils/createFakeContact';

export const addOneContact = async () => {
    try {
        const contacts = JSON.parse(await fs.readFile(PATH_DB));
        const newContact = createFakeContact();
        contacts.push(newContact);
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    } catch (error) {
        console.log(error);
    }
};

await addOneContact();
