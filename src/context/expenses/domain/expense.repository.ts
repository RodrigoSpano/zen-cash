import type {
  IPrimitiveExpense,
  IExpenseShort,
  FindExpensesOptions,
  FindOneExpenseOptions,
} from './types/expense.d.ts';

export abstract class ExpenseRepository {
  abstract create(expense: IExpenseShort): Promise<void>;
  abstract findOne(
    options: FindOneExpenseOptions,
  ): Promise<IPrimitiveExpense | null>;
  abstract find(options?: FindExpensesOptions): Promise<IPrimitiveExpense[]>;
}
