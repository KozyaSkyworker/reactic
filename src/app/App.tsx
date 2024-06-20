import { Link } from 'react-router-dom';
import { useTheme } from 'app/contexts/theme';
import { classNames } from 'helpers/classNames';
import { AppRouter } from 'app/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <div>
        <Link to={'/'}>home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'/contacts'}>contacts</Link>
      </div>
      <AppRouter />
    </div>
  );
};

export default App;
