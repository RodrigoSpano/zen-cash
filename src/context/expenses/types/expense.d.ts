// props that user needs to send
export interface IExpenseShort {
  category_id: string;
  amount: number;
  title: string;
  description?: string;
}

export interface IPrimitiveExpense extends IExpenseShort {
  id: string;
  created_at: string;
  updated_at: string;
}
