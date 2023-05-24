import express from 'express';
import budgetCalculatorRoutes from './budgetCalculator.route';
import TransactonRoutes from './dailyTransaction.route';
import expenseRoutes from './expense.route';
import incomeRoute from './income.route';
import investmentRoutes from './investment.route';
import investmentCategoryRoutes from './investmentcategory.route';
import jobtypeRoutes from './jobtype.route';
import savingsRoutes from './savings.route';
import savingsCategoryRoutes from './savingscategory.route';

// const router = Router();

const router = express.Router();

// Include the individual routes
router.use('/income', incomeRoute);
router.use('/expensebudget', expenseRoutes);
router.use('/savings', savingsRoutes);
router.use('/investments', investmentRoutes);
router.use('/daily-transactions', TransactonRoutes);
router.use('/budget-calculator', budgetCalculatorRoutes);
router.use('/jobtype', jobtypeRoutes);
router.use('/savingscategory', savingsCategoryRoutes);
router.use('/investmentcategory', investmentCategoryRoutes);

export default router;
