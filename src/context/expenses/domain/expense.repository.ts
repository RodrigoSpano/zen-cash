import type { IExpenseShort } from '../types/expense';

export abstract class ExpenseRepository {
  abstract create(expense: IExpenseShort): Promise<void>;
}
