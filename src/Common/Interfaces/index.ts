export interface ReactChildren {
  children?: React.ReactNode;
}

export interface Years {
  id?: string;
  name?: number;
  user_id?: string;
}

export interface Months {
  id?: string;
  name?: string;
  year_id?: string;
}

export interface MonthYear {
  year?: string;
  month?: string;
  month_id?: string;
}

export interface Days {
  id: string;
  month_id: string;
  name: number;
  task: string | null;
}

export interface ResponseAxiosUser {
  id?: string;
  type?: string;
  name?: string;
  email?: string;
  password?: string;
  years: Years[];
  months: Months[];
  days: Days[];
}
