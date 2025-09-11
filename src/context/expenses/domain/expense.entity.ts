import * as UUID from 'uuid';
import type { IExpenseShort, IPrimitiveExpense } from './types/expense.d.ts';

export class Expense {
  constructor(private attributes: IPrimitiveExpense) {}

  create(expense: IExpenseShort): Expense {
    return new Expense({
      id: UUID.v4(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...expense,
    });
  }

  toValue(): IPrimitiveExpense {
    return {
      ...this.attributes,
    };
  }
}
