import { DataTypes, Model, Sequelize } from 'sequelize';

export class InvestmentCategory extends Model {
  public id!: number;
  public category!: string;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'investmentcategories',
        modelName: 'InvestmentCategory',
      }
    );
  }
}
