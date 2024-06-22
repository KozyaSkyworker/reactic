import { classNames } from 'helpers/classNames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classes from './appbutton.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: ThemeButton;
}

const AppButton: FC<AppButtonProps> = (props) => {
  const { children, theme, ...otherButtonProps } = props;

  return (
    <button className={classNames(classes.button, {}, [classes[theme]])} {...otherButtonProps}>
      {children}
    </button>
  );
};

export default AppButton;
