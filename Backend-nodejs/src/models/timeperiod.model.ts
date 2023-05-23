import { DataTypes, Model, Sequelize } from 'sequelize';

export class TimePeriod extends Model {
  public id!: number;
  public period!: string;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        period: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'timeperiods',
        modelName: 'TimePeriod',
      }
    );
  }
}
