import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Trainne extends Model {
  @Column
  name: string;

  @Column
  phone: string;

  @Column
  email: string;

  @Column
  admission_date: string;

  @Column
  projects: string;

  @Column
  linkedin: string;

  @Column
  github: string;

  @Column
  place_of_performance: string;

  @Column
  delivery_manager: string;

  @Column
  forma_admissao: string;

  @Column
  client: string;

  @Column
  delivery: string;

  @Column
  level: string;

  @Column
  academic_education: string;
}
