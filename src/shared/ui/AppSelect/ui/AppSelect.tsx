import { classNames } from 'shared/lib/classNames/classNames';
import classes from './appselect.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';
import { Currency } from 'shared/const/common';

export interface SelectOption {
  value: string;
  text: string;
}

interface AppSelectProps {
  options?: SelectOption[];
  value?: string;
  onChange?: (value: Currency) => void;
  disabled: boolean | undefined;
}

export const AppSelect = memo((props: AppSelectProps) => {
  const { options, value, onChange, disabled } = props;

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.text}
        </option>
      )),
    [options],
  );

  console.log(optionsList);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as Currency);
  };

  return (
    <select
      className={classNames(classes.select)}
      value={value}
      onChange={onChangeHandler}
      disabled={disabled}>
      {optionsList}
    </select>
  );
});
