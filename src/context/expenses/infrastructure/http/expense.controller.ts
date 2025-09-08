import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateExpenseDto } from './dto/request/create-expense.dto';
import { ExpenseService } from '../../application/services/expense-usecases.service';

@Controller('expense')
export class ExpenseController {
  constructor(@Inject() private expenseService: ExpenseService) {}

  @Post()
  async postExpense(@Body() createExpenseDto: CreateExpenseDto) {
    console.log(createExpenseDto);
    await this.expenseService.create(createExpenseDto);
  }
}
