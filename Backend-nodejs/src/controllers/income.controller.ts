import { Request, Response } from 'express';
import { Income } from '../models/income';

export class IncomeController {
  public static async create(req: Request, res: Response): Promise<void> {
    const { source, type, amount } = req.body;

    try {
      const income = await Income.create({ source, type, amount });
      res.status(201).json(income);
    } catch (error) {
      console.error('Error creating income:', error);
      res.status(500).json({ error: 'Failed to create income' });
    }
  }

  // Implement other controller methods (e.g., get, update, delete) as needed
}
