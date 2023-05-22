import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/transactions', transactionRoutes);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Finance Tracker API');
});

// Start the server
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
  });
