// props that user needs to send
export interface IExpenseShort {
  category_id: string;
  amount: number;
  title: string;
  description?: string;
}

type IExpenseTimestampsProps = {
  created_at: string;
  updated_at: string;
};

export interface IPrimitiveExpense
  extends IExpenseShort,
    IExpenseTimestampsProps {
  id: string;
}

// repository args types
export type FindExpensesOptions = {
  where?: Record<string, any>;
  order?: Record<string, 'ASC' | 'DESC'>;
  skip?: number;
  take?: number;
};

export type FindOneExpenseOptions = {
  select?: (keyof IPrimitiveExpense)[];
  where?: Partial<IPrimitiveExpense>;
};
