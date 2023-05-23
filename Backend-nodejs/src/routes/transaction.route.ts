import express, { Request, Response } from 'express';
import { TransactionModel } from '../models/transaction.model';

const TransactonRoutes = express.Router();

// Route to create a new transaction
TransactonRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const { description, amount } = req.body;
    const transaction = await TransactionModel.create({ description, amount });
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add more routes as per your requirements

export default TransactonRoutes;
