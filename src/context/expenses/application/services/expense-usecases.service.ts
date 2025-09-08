/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type CreateExpenseUseCaseDto } from '../dto/create-expense-use-case.dto';

import { ExpenseRepository } from '../../domain/expense.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class expenseUseCasesService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async exec(createExpenseDto: CreateExpenseUseCaseDto): Promise<void> {
    await this.expenseRepository.create(createExpenseDto);
  }
}
