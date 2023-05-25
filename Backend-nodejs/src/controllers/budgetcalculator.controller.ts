import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import sequelizeConnection from '../../config/database';
import { BudgetCalculator } from '../models/budgetcalculator';
import { DailyExpense } from '../models/dailyexpenses';
import { ExpenseBudget } from '../models/expensebudget';

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

export const getBudgetOverview = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Retrieve the expense budget from the database
    const expenseBudget = await ExpenseBudget.findOne();

    // Calculate the total expenditure
    const totalExpenditure = await DailyExpense.calculateTotalExpenses();

    const totalBudget = expenseBudget?.allocatedAmount || 0;
    const remainingBudget = totalBudget - totalExpenditure;

    const budgetOverview = {
      totalBudget,
      totalExpenditure,
      remainingBudget,
    };

    // Retrieve additional data or perform other calculations for the budget overview

    res.json(budgetOverview);
  } catch (error) {
    console.error('Error getting budget overview:', error);
    res.status(500).json({ error: 'Failed to get budget overview' });
  }
};

// export const getExpenditureList = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { startDate, endDate, category } = req.query;

//     const filters: ExpenseFilters = {
//       startDate: startDate ? new Date(startDate as string) : null,
//       endDate: endDate ? new Date(endDate as string) : null,
//       category: (category as string) || null,
//     };

//     const expenditureList = await DailyExpense.getFilteredExpenditureList(
//       filters
//     );

//     res.json(expenditureList);
//   } catch (error) {
//     console.error('Error getting expenditure list:', error);
//     res.status(500).json({ error: 'Failed to get expenditure list' });
//   }
// };

export const getBudgetUsage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const totalBudget = await ExpenseBudget.getTotalBudget(); // Retrieve the total budget from the database or any other data source
    const totalExpenditure = await DailyExpense.calculateTotalExpenses(); // Retrieve the total expenditure from the database or any other data source

    const budgetUsage = {
      totalBudget,
      totalExpenditure,
      percentageUsed: (totalExpenditure / totalBudget) * 100,
    };

    res.json(budgetUsage);
  } catch (error) {
    console.error('Error getting budget usage:', error);
    res.status(500).json({ error: 'Failed to get budget usage' });
  }
};

export const getExpenditureList = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { startDate, endDate, category } = req.query;

    const filters = {
      startDate: startDate ? new Date(startDate.toString()) : null,
      endDate: endDate ? new Date(endDate.toString()) : null,
      category: category ? category.toString() : null,
    };

    const query = `
      SELECT * FROM DailyExpenses
      WHERE createdAt >= :startDate AND createdAt <= :endDate
      ${filters.category ? 'AND category = :category' : ''}
    `;

    const expenditureList = await sequelizeConnection.query(query, {
      replacements: filters,
      type: QueryTypes.SELECT,
    });

    res.json(expenditureList);
  } catch (error) {
    console.error('Error getting expenditure list:', error);
    res.status(500).json({ error: 'Failed to get expenditure list' });
  }
};

export default {
  createBudgetCalculator,
  getBudgetCalculator,
  updateBudgetCalculator,
  deleteBudgetCalculator,
};
