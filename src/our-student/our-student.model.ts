import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'our_students', timestamps: true, paranoid: true })
export class OurStudent extends Model<OurStudent> {
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
  name: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  overall: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  listening: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  reading: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  writing: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  speaking: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  image: string;
}
