import { Module } from '@nestjs/common';
import { ExpenseController } from './infrastructure/http/expense.controller';
import { ExpenseRepository } from './domain/expense.repository';
import { InMemoryRepository } from './infrastructure/repositories/in-memory-db.repository';
import { expenseUseCasesService } from './application/services/expense-usecases.service';

@Module({
  imports: [],
  controllers: [ExpenseController],
  providers: [
    expenseUseCasesService,
    InMemoryRepository,
    { useExisting: InMemoryRepository, provide: ExpenseRepository },
  ],
  exports: [expenseUseCasesService],
})
export class ExpenseModule {}
