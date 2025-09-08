import type { IExpenseShort, IPrimitiveExpense } from '../../types/expense';

import { v4 as uuidv4 } from 'uuid';
import { ExpenseRepository } from '../../domain/expense.repository';

export class InMemoryRepository extends ExpenseRepository {
  private readonly InMemoryDB = new Map<string, IPrimitiveExpense>();

  async create(expenseProps: IExpenseShort): Promise<void> {
    await Promise.resolve();
    const generatedId = uuidv4();
    this.InMemoryDB.set(generatedId, {
      ...expenseProps,
      id: generatedId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  }

  findById(id: string): Promise<IPrimitiveExpense | void> {
    // Simulate async behavior
    return Promise.resolve(this.InMemoryDB.get(id));
  }

  findAll(): Promise<IPrimitiveExpense[]> {
    return Promise.resolve(Array.from(this.InMemoryDB.values()));
  }
}
