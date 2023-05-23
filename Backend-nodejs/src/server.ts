import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import 'reflect-metadata';
import sequelizeConnection from '../config/database';
import { initializeModels } from './models';
import router from './routes';

dotenv.config(); // Load environment variables from .env file

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/transactions', router);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Finance Tracker API');
});
const models = initializeModels(sequelizeConnection);

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
