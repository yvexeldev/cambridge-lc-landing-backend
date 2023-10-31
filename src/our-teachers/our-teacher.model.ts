import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'our_teachers', timestamps: true, paranoid: true })
export class OurTeacher extends Model<OurTeacher> {
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
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  ielts: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  experience: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  students_count: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  image: string;
}
