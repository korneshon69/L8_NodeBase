const path = require('path');
const fs = require('fs');

const envFile = process.env.ENV_FILE || '.env.development';
const envPath = path.resolve(process.cwd(), envFile);

require('dotenv').config(); 

require('dotenv').config({ 
    path: envPath,
    override: true
});

console.log("--- Информация из .env ---");
console.log(`Имя: ${process.env.FIRST_NAME}`);
console.log(`Фамилия: ${process.env.LAST_NAME}`);
console.log(`Группа: ${process.env.GROUP_NUMBER}`);
console.log(`Номер в списке: ${process.env.LIST_NUMBER}`);

console.log(`---`);
console.log(`Файл конфигурации: ${envFile}`);
console.log(`Текущий режим работы: ${process.env.MODE}`);