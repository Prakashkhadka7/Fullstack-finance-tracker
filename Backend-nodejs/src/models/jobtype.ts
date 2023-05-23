import { DataTypes, Model, Sequelize } from 'sequelize';

export class JobType extends Model {
  public id!: number;
  public type!: string;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'jobtypes',
        modelName: 'JobType',
      }
    );
  }
}
