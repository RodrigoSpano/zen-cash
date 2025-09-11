import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // ManyToOne,
} from 'typeorm';
import type { IPrimitiveExpense } from '../../domain/types/expense.d.ts';

@Entity({ name: 'expenses' })
export class ExpenseEntity implements IPrimitiveExpense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'string' })
  title: string;

  @Column({ default: null, nullable: true })
  description: string;

  @CreateDateColumn({
    transformer: {
      from(value: string) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value;
      },
      to(value: Date) {
        value.toISOString();
      },
    },
  })
  created_at: string;

  @UpdateDateColumn({
    transformer: {
      from(value: string) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value;
      },
      to(value: Date) {
        value.toISOString();
      },
    },
  })
  updated_at: string;

  // todo => uncomment when category module is done
  // @ManyToOne(() => Category, (category) => category.id)
  @Column({ generated: 'uuid' })
  category_id: string;
}
