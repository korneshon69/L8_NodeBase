const os = require('os');
require('dotenv').config();

// a) Функция вывода информации о системе
function getSystemInfo() {
    console.log("--- Информация об ОС ---");
    console.log(`Платформа: ${os.platform()}`);
    console.log(`Свободная память: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`Главная директория: ${os.homedir()}`);
    console.log(`Имя ОС: ${os.type()}`);
    console.log(`Сетевые интерфейсы:`, os.networkInterfaces());
}

// b) Проверка: свободно ли больше 4GB
function checkMemory() {
    const freeGB = os.freemem() / (1024 ** 3);
    if (freeGB > 4) {
        console.log("Памяти достаточно (больше 4GB).");
    } else {
        console.log("Маловато памяти (меньше 4GB).");
    }
}

// c) Вызов с проверкой прав доступа
function secureGetSystemInfo() {
    const mode = process.env.MODE;
    if (mode === 'admin') {
        getSystemInfo();
    } else {
        console.log("Доступ запрещен. Только для admin.");
    }
}

// Экспортируем или вызываем для проверки
secureGetSystemInfo();
checkMemory();