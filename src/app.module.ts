import { Module } from '@nestjs/common';
import { ExpenseModule } from './context/expenses/expense.module';
import { MyConfigModule } from './config/config.module';
import { PostgresqlModule } from './shared/persistence/postgresql/postgresql.module';

@Module({
  imports: [ExpenseModule, MyConfigModule, PostgresqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
