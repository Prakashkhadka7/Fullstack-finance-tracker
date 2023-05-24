import dotenv from 'dotenv';
import express, { Application } from 'express';
import 'reflect-metadata';
import sequelizeConnection from '../config/database';
import { defineAssociations, initializeModels } from './models';
import routes from './routes';

dotenv.config(); // Load environment variables from .env file

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(express.json());

const models = initializeModels(sequelizeConnection);

defineAssociations(sequelizeConnection);

app.use(routes);

// Start the server
sequelizeConnection
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
  });
