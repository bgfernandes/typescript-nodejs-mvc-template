import dotenv from 'dotenv';
import path from 'path';

let envFilePath = path.resolve(__dirname, '.env');
if (process.env.NODE_ENV === 'test') {
  envFilePath = path.resolve(__dirname, '.env.test');
}

dotenv.config({
  path: envFilePath
});

export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT,
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_pass: process.env.DB_PASS,
  db_database: process.env.DB_DATABASE
};
