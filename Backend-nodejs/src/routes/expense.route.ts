import express from 'express';
import {
  createExpense,
  deleteExpense,
  getExpense,
  updateExpense,
} from '../controllers/expensebudget.controller';

const expenseRoutes = express.Router();

expenseRoutes.post('/', createExpense);
expenseRoutes.get('/:id', getExpense);
expenseRoutes.put('/:id', updateExpense);
expenseRoutes.delete('/:id', deleteExpense);

export default expenseRoutes;
