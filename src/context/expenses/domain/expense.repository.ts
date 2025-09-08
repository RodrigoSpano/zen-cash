import type { IPrimitiveExpense, IExpenseShort } from '../types/expense';

export abstract class ExpenseRepository {
  abstract create(expense: IExpenseShort): Promise<void>;
  // abstract findById(id: string): Promise<IPrimitiveExpense | null>;
}
