import { Request, Response } from 'express';
import { DailyExpense } from '../models/dailyexpenses';
import { ExpenseBudget } from '../models/expensebudget';

export const createDailyExpense = async (req: Request, res: Response) => {
  try {
    const { expenditureType, amount, userId } = req.body;

    const dailyExpense = await DailyExpense.create({
      expenditureType,
      amount,
      userId,
    });
    await ExpenseBudget.deductExpenseBudget(amount);

    res.status(201).json(dailyExpense);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create daily transaction' });
  }
};

export const getDailyExpense = async (req: Request, res: Response) => {
  try {
    const DailyExpenseId = req.params.id;

    const dailyExpense = await DailyExpense.findByPk(DailyExpenseId);

    if (!dailyExpense) {
      return res.status(404).json({ message: 'Daily transaction not found' });
    }

    res.status(200).json(dailyExpense);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get daily transaction' });
  }
};

export const updateDailyExpense = async (req: Request, res: Response) => {
  try {
    const DailyExpenseId = req.params.id;
    const { expenditureType, amount, userId } = req.body;

    const dailyExpense = await DailyExpense.findByPk(DailyExpenseId);

    if (!dailyExpense) {
      return res.status(404).json({ message: 'Daily transaction not found' });
    }

    dailyExpense.expenditureType = expenditureType;
    dailyExpense.amount = amount;
    dailyExpense.userId = userId;

    await dailyExpense.save();

    res.status(200).json(DailyExpense);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update daily transaction' });
  }
};

export const deleteDailyExpense = async (req: Request, res: Response) => {
  try {
    const DailyExpenseId = req.params.id;

    const dailyExpense = await DailyExpense.findByPk(DailyExpenseId);

    if (!dailyExpense) {
      return res.status(404).json({ message: 'Daily transaction not found' });
    }

    await dailyExpense.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete daily transaction' });
  }
};

export default {
  createDailyExpense,
  getDailyExpense,
  updateDailyExpense,
  deleteDailyExpense,
};
