import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

const App = () => {
  const { theme } = useTheme();

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
