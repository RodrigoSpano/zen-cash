import type { IExpenseShort, IPrimitiveExpense } from '../../types/expense';

import { v4 as uuidv4 } from 'uuid';
import { ExpenseRepository } from '../../domain/expense.repository';

export class InMemoryRepository extends ExpenseRepository {
  private readonly InMemoryDB: IPrimitiveExpense[] = [];

  async create(expenseProps: IExpenseShort): Promise<void> {
    await Promise.resolve();
    this.InMemoryDB.push({
      ...expenseProps,
      id: uuidv4(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  }
}
