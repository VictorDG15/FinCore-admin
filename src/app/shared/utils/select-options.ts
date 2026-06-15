export interface SelectOption<T = string> {
  label: string;
  value: T;
}

export const toSelectOptions = <T extends string>(values: T[]): SelectOption<T>[] =>
  values.map((value) => ({ label: value.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase()), value }));
