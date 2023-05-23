import { DataTypes, Model, Sequelize } from 'sequelize';

export class TransactionModel extends Model {
  public transactionId!: number;
  public description!: string;
  public amount!: number;
  // Add more properties as needed

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        transactionId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        // Add more columns as needed
      },
      {
        sequelize,
        tableName: 'transactions',
        timestamps: true,
      }
    );
  }
}
