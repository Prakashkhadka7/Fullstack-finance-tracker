import { Sequelize } from 'sequelize';
import { BudgetCalculator } from './budgetcalculator';
import { DailyTransaction } from './dailytransaction';
import { Expense } from './expense';
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
    Expense: Expense.initialize(sequelize),
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
