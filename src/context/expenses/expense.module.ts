import { Module } from '@nestjs/common';
import { ExpenseController } from './infrastructure/http/expense.controller';
import { ExpenseRepository } from './domain/expense.repository';
import { InMemoryRepository } from './infrastructure/repositories/in-memory-db.repository';
import { CreateExpenseUseCase } from './application/create-expense-use-case';

@Module({
  imports: [],
  controllers: [ExpenseController],
  providers: [
    CreateExpenseUseCase,
    InMemoryRepository,
    { useExisting: InMemoryRepository, provide: ExpenseRepository },
  ],
  exports: [CreateExpenseUseCase],
})
export class ExpenseModule {}
