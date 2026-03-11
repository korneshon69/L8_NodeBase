const bcrypt = require('bcrypt');

const passwords = Array(13).fill("my_super_password_123");

async function hashPasswords() {
    console.log("Начинаем шифрование...");
    for (let i = 0; i < passwords.length; i++) {
        const start = performance.now();
        await bcrypt.hash(passwords[i], 10);
        const end = performance.now();
        console.log(`Пароль №${i + 1}: ${(end - start).toFixed(2)} мс`);
    }
}
hashPasswords();