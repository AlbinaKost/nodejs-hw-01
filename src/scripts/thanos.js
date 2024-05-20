import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from '../scripts/getAllContacts.js';

export const thanos = async () => {
    try {
        const contacts = await getAllContacts();
        if (!contacts.length) return;
        const resultContacts = contacts.filter(() => Math.round(Math.random()));
        await fs.writeFile(PATH_DB, JSON.stringify(resultContacts));
    } catch (error) {
        console.log(error);
    }
};

await thanos();
