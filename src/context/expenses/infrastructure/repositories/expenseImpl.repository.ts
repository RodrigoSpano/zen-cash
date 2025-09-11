import type {
  IExpenseShort,
  IPrimitiveExpense,
} from '../../domain/types/expense.d.ts';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { ExpenseRepository } from '../../domain/expense.repository';

export class ExpenseRepositoryImpl implements ExpenseRepository {
  constructor(private readonly pgRepository: Repository<IPrimitiveExpense>) {}
  async create(expense: IExpenseShort): Promise<void> {
    const newExpense = this.pgRepository.create(expense);
    await this.pgRepository.save(newExpense);
  }
  async find(
    options?: FindManyOptions<IPrimitiveExpense>,
  ): Promise<IPrimitiveExpense[]> {
    return this.pgRepository.find(options);
  }
  async findOne(
    options: FindOneOptions<IPrimitiveExpense>,
  ): Promise<IPrimitiveExpense | null> {
    return this.pgRepository.findOne(options);
  }
}
