import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateExpenseDto } from './dto/request/create-expense.dto';
import { ExpenseRepository } from '../../domain/expense.repository';

@Controller('expense')
export class ExpenseController {
  constructor(@Inject() private expenseRepository: ExpenseRepository) {}

  @Post()
  async postExpense(@Body() createExpenseDto: CreateExpenseDto) {
    console.log(createExpenseDto);
    await this.expenseRepository.create(createExpenseDto);
    // if (!createExpense) throw new BadRequestException();
  }
}
