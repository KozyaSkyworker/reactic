import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import classes from './AppInput.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface AppInputProps extends HTMLInput {
  value?: string;
  onChange?: (value: string) => void;
  foreignClasses?: string;
}

const AppInput = memo(
  ({
    value,
    onChange,
    type = 'text',
    foreignClasses = '',
    autoFocus,
    ...otherProps
  }: AppInputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus) {
        inputRef.current?.focus();
      }
    }, [autoFocus]);

    return (
      <input
        ref={inputRef}
        className={classNames(classes.inpt, {}, [foreignClasses])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    );
  },
);

export default AppInput;
