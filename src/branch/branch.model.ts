import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'branches', timestamps: true, paranoid: true })
export class Branch extends Model<Branch> {
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
  address: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  google_maps_url: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  yandex_maps_url: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  image: string;
}
