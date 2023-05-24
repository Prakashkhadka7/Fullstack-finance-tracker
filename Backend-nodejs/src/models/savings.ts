import { DataTypes, Model, Sequelize } from 'sequelize';

export class Savings extends Model {
  public id!: number;
  public jobTypeId!: number;
  public savingsCategoryId!: number;
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
        amount: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'savings',
        modelName: 'Savings',
      }
    );
  }

  static associate(models: any) {
    this.belongsTo(models.JobType, {
      foreignKey: 'jobTypeId',
      as: 'jobType',
    });

    this.belongsTo(models.SavingsCategory, {
      foreignKey: 'savingsCategoryId',
      as: 'savingsCategory',
    });
  }
}
