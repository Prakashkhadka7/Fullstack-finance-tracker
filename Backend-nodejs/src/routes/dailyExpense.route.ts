import express from 'express';
import {
  createDailyExpense,
  deleteDailyExpense,
  getDailyExpense,
  updateDailyExpense,
} from '../controllers/dailyExpense.controller';

const expensesRoutes = express.Router();

expensesRoutes.post('/', createDailyExpense);
expensesRoutes.get('/:id', getDailyExpense);
expensesRoutes.put('/:id', updateDailyExpense);
expensesRoutes.delete('/:id', deleteDailyExpense);

export default expensesRoutes;
