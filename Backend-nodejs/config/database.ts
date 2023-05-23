import dotenv from 'dotenv';
import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

dotenv.config(); // Load environment variables from .env file

const {
  DB_NAME = 'finance-tracker',
  DB_USERNAME = 'postgres',
  DB_PASSWORD = 'admin',
  DB_HOST = 'localhost',
  DB_DIALECT = 'mysql',
} = process.env;

const sequelizeConnection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT as Dialect, // Explicitly cast DB_DIALECT to Dialect
});

export default sequelizeConnection;
