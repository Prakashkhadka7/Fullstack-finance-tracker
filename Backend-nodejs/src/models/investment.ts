import { DataTypes, Model, Sequelize } from 'sequelize';

export class Investment extends Model {
  public id!: number;
  public amount!: number;
  public categoryId!: number;
  public investmentCategoryId!: number;

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
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'investments',
        modelName: 'Investment',
      }
    );
  }

  static associate(models: any) {
    this.belongsTo(models.InvestmentCategory, {
      foreignKey: 'investmentCategoryId',
      as: 'investmentCategory',
    });
  }
}
