import { DataTypes, Model, Sequelize } from 'sequelize';

export class DailyTransaction extends Model {
  public id!: number;
  public expenditureType!: string;
  public amount!: number;

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
        tableName: 'dailytransactions',
        modelName: 'DailyTransaction',
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
}
