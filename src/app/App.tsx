import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useEffect } from 'react';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div className="content-wrapper">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
