import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

import classes from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppInput from 'shared/ui/AppInput/AppInput';

export const LoginForm = () => {
  return (
    <div className={classNames(classes.loginform)}>
      <h3 className={classNames(classes.loginform__title)}>Авторизация</h3>
      <div className={classNames(classes.loginform__content)}>
        <AppInput
          autoFocus={true}
          placeholder="username"
          type="text"
          foreignClasses={classNames(classes.loginform__inpt)}
        />
        <AppInput
          placeholder="password"
          type="password"
          foreignClasses={classNames(classes.loginform__inpt)}
        />
        <AppButton foreignClasses={classNames(classes.loginform__btn)} theme={ThemeButton.OUTLINE}>
          Войти
        </AppButton>
      </div>
    </div>
  );
};
