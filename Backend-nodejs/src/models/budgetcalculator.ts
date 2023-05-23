import { DataTypes, Model, Sequelize } from 'sequelize';

export class BudgetCalculator extends Model {
  public id!: number;
  public total!: number;
  public totalBudget!: number;
  public totalBudgetRemaining!: number;
  public remainingPercentage!: number;
  public createdDate!: Date;
  public isDeleted!: boolean;
  public startDate!: Date;
  public endDate!: Date;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        total: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        totalBudget: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        totalBudgetRemaining: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        remainingPercentage: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        createdDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        isDeleted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        startDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        endDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'budgetcalculators',
        modelName: 'BudgetCalculator',
      }
    );
  }

  static associate(models: any) {
    this.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    this.belongsTo(models.DailyTransaction, {
      foreignKey: 'dailyTransactionId',
      as: 'dailyTransaction',
    });

    this.belongsTo(models.DailyTransaction, {
      foreignKey: 'grandTotalId',
      as: 'grandTotal',
    });

    this.belongsTo(models.ExpenseCategory, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  }
}
