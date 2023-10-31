import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'course_cards', timestamps: true, paranoid: true })
export class CourseCard extends Model<CourseCard> {
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
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  image: string;
}
