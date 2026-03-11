const { loadData } = require('./utils/fetcher');
const { sortWithoutSpaces } = require('./utils/sorter');
const { createDir, writeFile } = require('./utils/fileManager');
const path = require('path');

async function init() {
    console.log("Загрузка пользователей...");
    const url = 'https://jsonplaceholder.typicode.com/users';
    const result = await loadData(url);

    if (result.error) {
        console.error("Произошла ошибка:", result.error);
        return;
    }

    const names = result.data.map(user => user.name);
    const emails = result.data.map(user => user.email).join('\n');

    const sortedNames = sortWithoutSpaces(names).join('\n');

    const usersDir = path.join(__dirname, 'users');
    createDir(usersDir);

    writeFile(path.join(usersDir, 'names.txt'), sortedNames);
    writeFile(path.join(usersDir, 'emails.txt'), emails);

    console.log("Структура создана, данные записаны и отсортированы!");
    
    const testArr = ["B a", "A z", " C b"];
    console.log(sortWithoutSpaces(testArr));
}

init();