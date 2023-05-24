import { DataTypes, Model, Sequelize } from 'sequelize';

export class ExpenseBudget extends Model {
  static save() {
    throw new Error('Method not implemented.');
  }
  public id!: number;
  public allocatedAmount!: number;
  public categoryId!: number;
  static categoryId: any;
  static allocatedAmount: any;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        allocatedAmount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'expenseBudget',
        modelName: 'Expense',
      }
    );
  }

  static associate(models: any) {
    this.belongsTo(models.ExpenseCategory, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  }
  public static async deductExpenseBudget(amount: number): Promise<void> {
    try {
      const expense = await ExpenseBudget.findOne();

      if (expense) {
        expense.allocatedAmount -= amount;
        await expense.save();
      }
    } catch (error) {
      console.error('Error deducting expense budget:', error);
    }
  }
}
