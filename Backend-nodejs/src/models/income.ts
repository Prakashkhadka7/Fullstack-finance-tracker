import { DataTypes, Model, Sequelize } from 'sequelize';

export class Income extends Model {
  public id!: number;
  public source!: string;
  public type!: number;
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
        source: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'incomes',
        modelName: 'Income',
      }
    );
  }

  static associate(models: any) {
    this.belongsTo(models.JobType, {
      foreignKey: 'type',
      as: 'jobType',
      constraints: true,
    });
  }
}
