import { DataTypes, Model, Sequelize } from 'sequelize';

export class Income extends Model {
  public id!: number;
  public source!: string;

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
      foreignKey: 'jobTypeId',
      as: 'jobType',
    });
  }
}
