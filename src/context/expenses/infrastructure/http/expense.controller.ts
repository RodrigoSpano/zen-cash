import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateExpenseDto } from './dto/request/create-expense.dto';
import { ExpenseService } from '../../application/services/expense.service';

@Controller('expense')
export class ExpenseController {
  constructor(@Inject() private expenseService: ExpenseService) {}

  @Post()
  async postExpense(@Body() createExpenseDto: CreateExpenseDto) {
    console.log(createExpenseDto);
    await this.expenseService.create(createExpenseDto);
  }

  @Get(':id')
  async getExpenseById(@Param('id') id: string) {
    return await this.expenseService.findById(id);
  }

  @Get()
  async getAllExpenses() {
    return await this.expenseService.findAll();
  }
}
