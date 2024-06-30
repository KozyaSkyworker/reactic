import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classes from './appbutton.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  ROUNDED = 'rounded',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: ThemeButton;
  foreignClasses?: string;
}

const AppButton: FC<AppButtonProps> = (props) => {
  const { children, theme, foreignClasses = '', ...otherButtonProps } = props;

  return (
    <button
      className={classNames(`${foreignClasses} ${classes.btn}`, {}, [classes[theme]])}
      {...otherButtonProps}>
      {children}
    </button>
  );
};

export default AppButton;
