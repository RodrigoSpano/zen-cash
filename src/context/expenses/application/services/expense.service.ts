/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type CreateExpenseUseCaseDto } from '../dto/create-expense-use-case.dto';

import { ExpenseRepository } from '../../domain/expense.repository';
import { Injectable } from '@nestjs/common';
import type {
  FindExpensesOptions,
  FindOneExpenseOptions,
  IPrimitiveExpense,
} from '../../domain/types/expense.d.ts';

@Injectable()
export class ExpenseService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async create(createExpenseDto: CreateExpenseUseCaseDto): Promise<void> {
    await this.expenseRepository.create(createExpenseDto);
  }

  async findOne(
    options: FindOneExpenseOptions,
  ): Promise<IPrimitiveExpense | null> {
    return await this.expenseRepository.findOne(options);
  }

  async find(options?: FindExpensesOptions): Promise<IPrimitiveExpense[]> {
    return await this.expenseRepository.find(options);
  }
}
