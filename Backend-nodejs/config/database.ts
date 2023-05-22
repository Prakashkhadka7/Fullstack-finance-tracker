import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Dialect } from 'sequelize';

dotenv.config(); // Load environment variables from .env file

const {
  DB_NAME = 'your_default_database_name',
  DB_USERNAME = 'your_default_username',
  DB_PASSWORD = 'your_default_password',
  DB_HOST = 'localhost',
  DB_DIALECT = 'mysql'
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT as Dialect, // Explicitly cast DB_DIALECT to Dialect
});

export default sequelize;
