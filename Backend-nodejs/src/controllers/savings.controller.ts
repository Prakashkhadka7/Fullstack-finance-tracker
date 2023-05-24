import { Request, Response } from 'express';
import { Savings } from '../models/savings';

export const createSavings = async (req: Request, res: Response) => {
  try {
    const { jobTypeId, savingsCategoryId, amount } = req.body;

    const savings = await Savings.create({
      jobTypeId,
      savingsCategoryId,
      amount,
    });

    res.status(201).json(savings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create savings' });
  }
};

export const getSavings = async (req: Request, res: Response) => {
  try {
    const savingsId = req.params.id;

    const savings = await Savings.findByPk(savingsId);

    if (!savings) {
      return res.status(404).json({ message: 'Savings not found' });
    }

    res.status(200).json(savings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get savings' });
  }
};

export const updateSavings = async (req: Request, res: Response) => {
  try {
    const savingsId = req.params.id;
    const { jobTypeId, savingsCategoryId, amount } = req.body;

    const savings = await Savings.findByPk(savingsId);

    if (!savings) {
      return res.status(404).json({ message: 'Savings not found' });
    }

    savings.jobTypeId = jobTypeId;
    savings.savingsCategoryId = savingsCategoryId;
    savings.amount = amount;

    await savings.save();

    res.status(200).json(savings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update savings' });
  }
};

export const deleteSavings = async (req: Request, res: Response) => {
  try {
    const savingsId = req.params.id;

    const savings = await Savings.findByPk(savingsId);

    if (!savings) {
      return res.status(404).json({ message: 'Savings not found' });
    }

    await savings.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete savings' });
  }
};

export default {
  createSavings,
  getSavings,
  updateSavings,
  deleteSavings,
};
