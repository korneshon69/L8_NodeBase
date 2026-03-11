const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');


// Запись/Изменение
const writeFileSync = (filePath, data) => fs.writeFileSync(filePath, data, 'utf8');

// Чтение
const readFileSync = (filePath) => fs.readFileSync(filePath, 'utf8');

// Удаление содержимого
const clearFileSync = (filePath) => fs.writeFileSync(filePath, '', 'utf8');

// Удаление шума
const cleanNoiseSync = (filePath) => {
    let content = readFileSync(filePath);
    content = content.replace(/\d/g, '').toLowerCase();
    writeFileSync(filePath, content);
};

// Копирование
const copyFileSync = (src, dest) => fs.copyFileSync(src, dest);

// Создание/Удаление папки
const createDirSync = (dirPath) => !fs.existsSync(dirPath) && fs.mkdirSync(dirPath);
const removeDirSync = (dirPath) => fs.rmSync(dirPath, { recursive: true, force: true });


const writeFileAsync = async (filePath, data) => await fsPromises.writeFile(filePath, data, 'utf8');
const readFileAsync = async (filePath) => await fsPromises.readFile(filePath, 'utf8');

const cleanNoiseAsync = async (filePath) => {
    let content = await readFileAsync(filePath);
    content = content.replace(/\d/g, '').toLowerCase();
    await writeFileAsync(filePath, content);
};


// Список всех файлов
const listFiles = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const name = path.join(dir, file);
        if (name.includes('node_modules') || name.includes('.git')) return;
        if (fs.statSync(name).isDirectory()) {
            listFiles(name, fileList);
        } else {
            fileList.push(name);
        }
    });
    return fileList;
};

// Удаление всего, кроме служебного
const clearProject = () => {
    const files = fs.readdirSync(__dirname); // или процессный путь
    files.forEach(file => {
        if (['node_modules', '.git', 'package.json', 'package-lock.json', '.gitignore'].includes(file)) return;
        fs.rmSync(file, { recursive: true, force: true });
    });
};