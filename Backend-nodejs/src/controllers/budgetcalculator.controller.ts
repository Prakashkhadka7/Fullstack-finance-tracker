import { Request, Response } from 'express';
import { BudgetCalculator } from '../models/budgetcalculator';

export const createBudgetCalculator = async (req: Request, res: Response) => {
  try {
    const { income, expense, savings, investment } = req.body;

    const budgetCalculator = await BudgetCalculator.create({
      income,
      expense,
      savings,
      investment,
    });

    res.status(201).json(budgetCalculator);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create budget calculator' });
  }
};

export const getBudgetCalculator = async (req: Request, res: Response) => {
  try {
    const budgetCalculatorId = req.params.id;

    const budgetCalculator = await BudgetCalculator.findByPk(
      budgetCalculatorId
    );

    if (!budgetCalculator) {
      return res.status(404).json({ message: 'Budget calculator not found' });
    }

    res.status(200).json(budgetCalculator);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get budget calculator' });
  }
};

export const updateBudgetCalculator = async (req: Request, res: Response) => {
  try {
    const budgetCalculatorId = req.params.id;
    const { income, expense, savings, investment } = req.body;

    const budgetCalculator = await BudgetCalculator.findByPk(
      budgetCalculatorId
    );

    if (!budgetCalculator) {
      return res.status(404).json({ message: 'Budget calculator not found' });
    }

    budgetCalculator.income = income;
    budgetCalculator.expense = expense;
    budgetCalculator.savings = savings;
    budgetCalculator.investment = investment;

    await budgetCalculator.save();

    res.status(200).json(budgetCalculator);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update budget calculator' });
  }
};

export const deleteBudgetCalculator = async (req: Request, res: Response) => {
  try {
    const budgetCalculatorId = req.params.id;

    const budgetCalculator = await BudgetCalculator.findByPk(
      budgetCalculatorId
    );

    if (!budgetCalculator) {
      return res.status(404).json({ message: 'Budget calculator not found' });
    }

    await budgetCalculator.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete budget calculator' });
  }
};

export default {
  createBudgetCalculator,
  getBudgetCalculator,
  updateBudgetCalculator,
  deleteBudgetCalculator,
};
