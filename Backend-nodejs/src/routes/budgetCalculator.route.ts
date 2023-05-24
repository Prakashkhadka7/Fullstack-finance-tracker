import express from 'express';
import {
  createBudgetCalculator,
  deleteBudgetCalculator,
  getBudgetCalculator,
  updateBudgetCalculator,
} from '../controllers/budgetcalculator.controller';

const budgetCalculatorRoutes = express.Router();

budgetCalculatorRoutes.post('/', createBudgetCalculator);
budgetCalculatorRoutes.get('/:id', getBudgetCalculator);
budgetCalculatorRoutes.put('/:id', updateBudgetCalculator);
budgetCalculatorRoutes.delete('/:id', deleteBudgetCalculator);

export default budgetCalculatorRoutes;
