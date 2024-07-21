import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import classes from './appbutton.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_HOVER = 'outline_hover',
  ROUNDED = 'rounded',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: ThemeButton;
  foreignClasses?: string;
}

const AppButton = memo((props: AppButtonProps) => {
  const {
    children,
    theme = ThemeButton.OUTLINE,
    disabled,
    foreignClasses = '',
    ...otherButtonProps
  } = props;

  return (
    <button
      className={classNames(`${foreignClasses} ${classes.btn}`, { [classes.disabled]: disabled }, [
        classes[theme],
      ])}
      disabled={disabled}
      {...otherButtonProps}>
      {children}
    </button>
  );
});

export default AppButton;
