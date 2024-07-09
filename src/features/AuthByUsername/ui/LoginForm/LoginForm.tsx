import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

import classes from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppInput from 'shared/ui/AppInput/AppInput';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export const LoginForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(classes.loginform)}>
      <h3 className={classNames(classes.loginform__title)}>Авторизация</h3>
      <div className={classNames(classes.loginform__content)}>
        {error && <p>error!</p>}
        <AppInput
          autoFocus={true}
          placeholder="username"
          type="text"
          foreignClasses={classNames(classes.loginform__inpt)}
          value={username}
          onChange={onChangeUsername}
        />
        <AppInput
          placeholder="password"
          type="password"
          foreignClasses={classNames(classes.loginform__inpt)}
          value={password}
          onChange={onChangePassword}
        />
        <AppButton
          foreignClasses={classNames(classes.loginform__btn)}
          theme={ThemeButton.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}>
          Войти
        </AppButton>
      </div>
    </div>
  );
};
