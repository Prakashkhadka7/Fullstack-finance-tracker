import express from 'express';
import {
  getBudgetOverview,
  getBudgetUsage,
  getExpenditureList,
} from '../controllers/budgetcalculator.controller';
import budgetCalculatorRoutes from './budgetCalculator.route';
import expensesRoutes from './dailyExpense.route';
import expenseRoutes from './expense.route';
import incomeRoute from './income.route';
import investmentRoutes from './investment.route';
import investmentCategoryRoutes from './investmentcategory.route';
import jobtypeRoutes from './jobtype.route';
import savingsRoutes from './savings.route';
import savingsCategoryRoutes from './savingscategory.route';
import userRoutes from './user.route';

// const router = Router();

const router = express.Router();

// Include the individual routes
router.use('/income', incomeRoute);
router.use('/expensebudget', expenseRoutes);
router.use('/savings', savingsRoutes);
router.use('/investments', investmentRoutes);
router.use('/expenses', expensesRoutes);
router.use('/budget-calculator', budgetCalculatorRoutes);
router.use('/jobtype', jobtypeRoutes);
router.use('/savingscategory', savingsCategoryRoutes);
router.use('/investmentcategory', investmentCategoryRoutes);
router.use('/budget-overview', getBudgetOverview);
router.use('/budget-usage', getBudgetUsage);
router.use('/api/expenditure/list', getExpenditureList);
router.use('/createuser', userRoutes);

export default router;
