import { Module } from '@nestjs/common';
import { ExpenseController } from './infrastructure/http/expense.controller';
import { ExpenseRepository } from './domain/expense.repository';
import { ExpenseService } from './application/services/expense.service';
import { ExpenseRepositoryImpl } from './infrastructure/repositories/expenseImpl.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseEntity } from './infrastructure/persistence/expense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseEntity])],
  controllers: [ExpenseController],
  providers: [
    ExpenseService,
    ExpenseRepositoryImpl,
    { useExisting: ExpenseRepositoryImpl, provide: ExpenseRepository },
  ],
  exports: [ExpenseService],
})
export class ExpenseModule {}
