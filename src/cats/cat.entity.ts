import { Table, Model, Column, TableOptions } from 'sequelize-typescript';

const tableOptions = {
  tableName: 'cats',
} as TableOptions;

@Table(tableOptions)
export class Cat extends Model<Cat> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
