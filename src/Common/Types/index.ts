import { ChangeEvent } from 'react';

export type NameMonth =
  | 'janeiro'
  | 'fevereiro'
  | 'março'
  | 'abril'
  | 'maio'
  | 'junho'
  | 'julho'
  | 'agosto'
  | 'setembro'
  | 'outubro'
  | 'novembro'
  | 'dezembro';

export type InputOnChange = ChangeEvent<HTMLInputElement>;
