/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type CreateExpenseUseCaseDto } from '../dto/create-expense-use-case.dto';

import { ExpenseRepository } from '../../domain/expense.repository';
import { Injectable } from '@nestjs/common';
import { IPrimitiveExpense } from '../../types/expense';

@Injectable()
export class ExpenseService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async create(createExpenseDto: CreateExpenseUseCaseDto): Promise<void> {
    await this.expenseRepository.create(createExpenseDto);
  }

  async findById(id: string): Promise<IPrimitiveExpense | void> {
    return await this.expenseRepository.findById(id);
  }

  async findAll(): Promise<IPrimitiveExpense[]> {
    return await this.expenseRepository.findAll();
  }
}
