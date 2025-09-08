import { Module } from '@nestjs/common';
import { ExpenseModule } from './context/expenses/expense.module';

@Module({
  imports: [ExpenseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
