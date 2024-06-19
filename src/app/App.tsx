import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useTheme } from 'app/contexts/theme';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { ContactsPage } from 'pages/ContactsPage';
import { classNames } from 'helpers/classNames';

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
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
