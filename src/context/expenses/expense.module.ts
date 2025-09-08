import { Module } from '@nestjs/common';
import { ExpenseController } from './infrastructure/http/expense.controller';
import { ExpenseRepository } from './domain/expense.repository';
import { InMemoryRepository } from './infrastructure/repositories/in-memory-db.repository';
import { ExpenseService } from './application/services/expense-usecases.service';

@Module({
  imports: [],
  controllers: [ExpenseController],
  providers: [
    ExpenseService,
    InMemoryRepository,
    { useExisting: InMemoryRepository, provide: ExpenseRepository },
  ],
  exports: [ExpenseService],
})
export class ExpenseModule {}
