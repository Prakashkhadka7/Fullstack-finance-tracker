import { Request, Response } from 'express';
import { SavingsCategory } from '../models/savingscategory';

export const createSavingsCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;

    const savingsCategory = await SavingsCategory.create({ category });

    res.status(201).json(savingsCategory);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create savings category' });
  }
};

export const getAllSavingsCategories = async (req: Request, res: Response) => {
  try {
    const savingsCategories = await SavingsCategory.findAll();

    res.status(200).json(savingsCategories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch savings categories' });
  }
};
