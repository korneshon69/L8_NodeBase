const fs = require('fs');
const path = require('path');

const createDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const writeFile = (filePath, content) => {
    fs.writeFileSync(filePath, content, 'utf8');
};

module.exports = {
    createDir,
    writeFile
};