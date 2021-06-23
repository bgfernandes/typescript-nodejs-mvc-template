import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '.env')
});

export default {
  env: process.env.NODE_ENV || 'unknown',
  port: process.env.PORT
};
