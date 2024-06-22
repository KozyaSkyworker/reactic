import { useTheme } from 'app/contexts/theme';
import { classNames } from 'helpers/classNames';

import classes from './themeswithcer.module.scss';

import ThemeIcon from 'shared/assets/icons/ThemeIcon.svg';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

type ThemeSwitcherProps = {
  externalClass?: string;
};

export const ThemeSwither = ({ externalClass }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton onClick={toggleTheme} theme={ThemeButton.CLEAR}>
      <ThemeIcon className={classNames(classes.themeicon, {}, [theme, , externalClass])} />
    </AppButton>
  );
};

// export ThemeSwither;