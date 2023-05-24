import { Request, Response } from 'express';
import { ExpenseBudget } from '../models/expensebudget';

export const createExpense = async (req: Request, res: Response) => {
  try {
    const { categoryId, allocatedAmount } = req.body;

    const expense = await ExpenseBudget.create({ categoryId, allocatedAmount });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create expense' });
  }
};

export const getExpense = async (req: Request, res: Response) => {
  try {
    const expenseId = req.params.id;

    const expense = await ExpenseBudget.findByPk(expenseId);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get expense' });
  }
};

export const updateExpense = async (req: Request, res: Response) => {
  try {
    const expenseId = req.params.id;
    const { categoryId, allocatedAmount } = req.body;

    const expense = await ExpenseBudget.findByPk(expenseId);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    ExpenseBudget.categoryId = categoryId;
    ExpenseBudget.allocatedAmount = allocatedAmount;

    await ExpenseBudget.save();

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update expense' });
  }
};

export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const expenseId = req.params.id;

    const expense = await ExpenseBudget.findByPk(expenseId);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    await ExpenseBudget.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete expense' });
  }
};

export default {
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense,
};
