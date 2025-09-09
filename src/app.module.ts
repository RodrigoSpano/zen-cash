import { Module } from '@nestjs/common';
import { ExpenseModule } from './context/expenses/expense.module';
import { MyConfigModule } from './config/config.module';

@Module({
  imports: [ExpenseModule, MyConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
