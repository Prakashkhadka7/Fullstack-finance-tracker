import { DataTypes, Model, Sequelize } from 'sequelize';

export class Expense extends Model {
  public id!: number;
  public allocatedAmount!: number;

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
        tableName: 'expenses',
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
}
