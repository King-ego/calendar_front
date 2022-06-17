import type * as Types from 'Common/Types';
import { getDay, parseISO } from 'date-fns';

export const daytwodigit = (digit: number): string => {
  return digit < 10 ? `0${digit}` : `${digit}`;
};

export const DayWeek = (
  year: string = '2022',
  month: string = '01',
  day: number = 1
): string => {
  const dayweek = getDay(
    parseISO(
      `${year}-${getDateMonth(month as Types.NameMonth)}-${daytwodigit(day)}`
    )
  );

  const week = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sabado',
  };

  return week[dayweek];
};

export const getDateMonth = (date: Types.NameMonth): string => {
  const month = {
    janeiro: '01',
    fevereiro: '02',
    março: '03',
    abril: '04',
    maio: '05',
    junho: '06',
    julho: '07',
    agosto: '08',
    setembro: '09',
    outubro: '10',
    novembro: '11',
    dezembro: '12',
  };
  return month[date];
};
