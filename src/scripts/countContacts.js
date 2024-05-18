import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    try {
        const contacts = JSON.parse(await fs.readFile(PATH_DB));
        return contacts.length;
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
