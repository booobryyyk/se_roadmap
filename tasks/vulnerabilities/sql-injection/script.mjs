import fs from 'fs';
import path from 'path';
import url from 'url';

const email = "'admin@mail.com'; --";
const password = '12345678-HAHAHAHA';

const query = `SELECT * FROM users WHERE email=${email} AND password=${password}`;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = 'injection.sql';
const pathName = path.join(__dirname, fileName);

fs.writeFile(pathName, query, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});
