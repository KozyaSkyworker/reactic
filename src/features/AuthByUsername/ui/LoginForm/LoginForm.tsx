import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

import classes from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppInput from 'shared/ui/AppInput/AppInput';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
  DynamicModuleLoader,
  ReducresList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const initialReducers: ReducresList = {
  loginForm: loginReducer,
};

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();

  // в этих селекторах можно было бы через creatSelector от getLoginState
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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

  const onLoginClick = useCallback(async () => {
    // @ts-expect-error idk how to fix it
    const result = await dispatch(loginByUsername({ username, password }));
    // @ts-expect-error idk how to fix it
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={classNames(classes.loginform)}>
        <h3 className={classNames(classes.loginform__title)}>Авторизация</h3>
        <div className={classNames(classes.loginform__content)}>
          {error && <p>error!</p>}
          <AppInput
            autoFocus={true}
            placeholder="username"
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
    </DynamicModuleLoader>
  );
};

export default LoginForm;
