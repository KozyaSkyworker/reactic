import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return (
            <Route key={path} element={<div className="content">{element}</div>} path={path} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
