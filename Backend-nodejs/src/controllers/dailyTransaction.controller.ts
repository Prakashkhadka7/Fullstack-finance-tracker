import { Request, Response } from 'express';
import { DailyTransaction } from '../models/dailytransaction';

export const createDailyTransaction = async (req: Request, res: Response) => {
  try {
    const { expenditureType, amount } = req.body;

    const dailyTransaction = await DailyTransaction.create({
      expenditureType,
      amount,
    });

    res.status(201).json(dailyTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create daily transaction' });
  }
};

export const getDailyTransaction = async (req: Request, res: Response) => {
  try {
    const dailyTransactionId = req.params.id;

    const dailyTransaction = await DailyTransaction.findByPk(
      dailyTransactionId
    );

    if (!dailyTransaction) {
      return res.status(404).json({ message: 'Daily transaction not found' });
    }

    res.status(200).json(dailyTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get daily transaction' });
  }
};

export const updateDailyTransaction = async (req: Request, res: Response) => {
  try {
    const dailyTransactionId = req.params.id;
    const { expenditureType, amount } = req.body;

    const dailyTransaction = await DailyTransaction.findByPk(
      dailyTransactionId
    );

    if (!dailyTransaction) {
      return res.status(404).json({ message: 'Daily transaction not found' });
    }

    dailyTransaction.expenditureType = expenditureType;
    dailyTransaction.amount = amount;

    await dailyTransaction.save();

    res.status(200).json(dailyTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update daily transaction' });
  }
};

export const deleteDailyTransaction = async (req: Request, res: Response) => {
  try {
    const dailyTransactionId = req.params.id;

    const dailyTransaction = await DailyTransaction.findByPk(
      dailyTransactionId
    );

    if (!dailyTransaction) {
      return res.status(404).json({ message: 'Daily transaction not found' });
    }

    await dailyTransaction.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete daily transaction' });
  }
};

export default {
  createDailyTransaction,
  getDailyTransaction,
  updateDailyTransaction,
  deleteDailyTransaction,
};
