import { Sequelize } from 'sequelize';
import { BudgetCalculator } from './budgetcalculator';
import { DailyTransaction } from './dailytransaction';
import { ExpenseBudget } from './expensebudget';
import { ExpenseCategory } from './expensecategory';
import { Income } from './income';
import { Investment } from './investment';
import { InvestmentCategory } from './investmentcategory';
import { JobType } from './jobtype';
import { Savings } from './savings';
import { SavingsCategory } from './savingscategory';
import { TimePeriod } from './timeperiod.model';
import { User } from './user.model';

export function initializeModels(sequelize: Sequelize) {
  const models = {
    User: User.initialize(sequelize),
    JobType: JobType.initialize(sequelize),
    TimePeriod: TimePeriod.initialize(sequelize),
    Income: Income.initialize(sequelize),
    ExpenseCategory: ExpenseCategory.initialize(sequelize),
    Expense: ExpenseBudget.initialize(sequelize),
    SavingsCategory: SavingsCategory.initialize(sequelize),
    Savings: Savings.initialize(sequelize),
    InvestmentCategory: InvestmentCategory.initialize(sequelize),
    Investment: Investment.initialize(sequelize),
    DailyTransaction: DailyTransaction.initialize(sequelize),
    BudgetCalculator: BudgetCalculator.initialize(sequelize),
  };

  // Define associations between models
  // Example: models.Income.belongsTo(models.JobType);
  return models;
}

export function defineAssociations(sequelize: Sequelize): void {
  // Associations for Transaction model (if any)

  // Associations for Income model
  Income.belongsTo(JobType, {
    foreignKey: 'jobTypeId',
    as: 'jobType',
  });

  // Associations for Expense model
  ExpenseBudget.belongsTo(ExpenseCategory, {
    foreignKey: 'expenseCategoryId',
    as: 'expenseCategory',
  });

  // Associations for Savings model
  Savings.belongsTo(JobType, {
    foreignKey: 'jobTypeId',
    as: 'jobType',
  });
  Savings.belongsTo(SavingsCategory, {
    foreignKey: 'savingsCategoryId',
    as: 'savingsCategory',
  });

  // Associations for Investment model
  Investment.belongsTo(InvestmentCategory, {
    foreignKey: 'investmentCategoryId',
    as: 'investmentCategory',
  });

  // Associations for DailyTransaction model
  DailyTransaction.belongsTo(ExpenseBudget, {
    foreignKey: 'expenseId',
    as: 'expense',
  });
  DailyTransaction.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });

  // Associations for BudgetCalculator model (if any)
  BudgetCalculator.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });
  BudgetCalculator.belongsTo(DailyTransaction, {
    foreignKey: 'dailyTransactionId',
    as: 'dailyTransaction',
  });

  // ...
}
