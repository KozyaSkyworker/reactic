import { useTheme } from 'app/contexts/theme';
import { classNames } from 'helpers/classNames';
import { AppRouter } from 'app/router';
import { NavBar } from 'widgets/NavBar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
