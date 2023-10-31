import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'faqs', timestamps: true, paranoid: true })
export class Faq extends Model<Faq> {
  @Column({
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  question: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  answer: string;
}
