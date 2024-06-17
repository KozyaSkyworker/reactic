import { Link, Route, Routes } from 'react-router-dom';
import { HomePageLazy } from './pages/HomePage/HomePage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { ContactsPageLazy } from './pages/ContactsPage/Contacts.lazy';
import { Suspense } from 'react';

const App = () => {
  return (
    <>
      <div>
        <Link to={'/'}>home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'/contacts'}>contacts</Link>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/contacts" element={<ContactsPageLazy />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
