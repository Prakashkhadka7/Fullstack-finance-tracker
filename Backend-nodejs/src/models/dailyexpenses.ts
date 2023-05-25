import { DataTypes, Model, Sequelize } from 'sequelize';

export interface ExpenseFilters {
  startDate?: Date | null;
  endDate?: Date | null;
  category?: string | string[] | null;
}

export class DailyExpense extends Model {
  public id!: number;
  public expenditureType!: string;
  public amount!: number;
  public userId!: number;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        expenditureType: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'DailyExpenses',
        modelName: 'DailyExpense',
      }
    );
  }

  static associate(models: any) {
    this.belongsTo(models.Expense, {
      foreignKey: 'expenseId',
      as: 'expense',
    });

    this.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  }

  static calculateTotalExpenses = async (): Promise<number> => {
    try {
      // Retrieve all expenses from the database
      const expenses = await DailyExpense.findAll();

      // Sum up the amounts of all expenses
      const totalExpenditure = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
      );

      return totalExpenditure;
    } catch (error) {
      console.error('Error calculating total expenditure:', error);
      throw error;
    }
  };
}
