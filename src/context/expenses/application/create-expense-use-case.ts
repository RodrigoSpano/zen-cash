/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type CreateExpenseUseCaseDto } from './create-expense-use-case.dto';

import { ExpenseRepository } from '../domain/expense.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateExpenseUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async exec(createExpenseDto: CreateExpenseUseCaseDto): Promise<void> {
    await this.expenseRepository.create(createExpenseDto);
  }
}
