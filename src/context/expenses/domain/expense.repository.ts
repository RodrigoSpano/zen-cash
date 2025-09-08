import type { IExpenseShort } from '../types/expense';

export abstract class ExpenseRepository {
  abstract create(expense: IExpenseShort): Promise<void>;
  // abstract findById(id: string): Promise<Expense | null>;
  // abstract findAll(): Promise<Expense[]>;
  // abstract update(expense: Expense): Promise<Expense>;
  // abstract delete(id: string): Promise<void>;
}
