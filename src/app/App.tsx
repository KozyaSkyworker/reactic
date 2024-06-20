import { useTheme } from 'app/contexts/theme';
import { classNames } from 'helpers/classNames';
import { AppRouter } from 'app/router';
import { NavBar } from 'widgets/NavBar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <button onClick={toggleTheme}>toggle theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
