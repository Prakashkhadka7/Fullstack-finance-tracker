import express from 'express';
import { IncomeController } from '../controllers/income.controller';

const incomeRoute = express.Router();

// POST /incomes
incomeRoute.post('/', IncomeController.create);

export default incomeRoute;
