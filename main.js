require('dotenv').config();

console.log("--- Информация из .env ---");
console.log(`Имя: ${process.env.FIRST_NAME}`);
console.log(`Фамилия: ${process.env.LAST_NAME}`);
console.log(`Группа: ${process.env.GROUP_NUMBER}`);
console.log(`Номер в списке: ${process.env.LIST_NUMBER}`);

const path = require('path');
const envFile = process.env.ENV_FILE || '.env.development';
require('dotenv').config({ path: path.resolve(process.cwd(), envFile) });

console.log(`Текущий режим работы: ${process.env.MODE}`);