import { classNames } from 'helpers/classNames';

import classes from './sidebar.module.scss';
import { useState } from 'react';

export const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sidebarToggle = () => {
    setSidebarOpen((prev) => !isSidebarOpen);
  };

  return (
    <aside className={classNames(classes.sidebar, { [classes.sidebar_open]: isSidebarOpen }, [])}>
      <h2>sidebar</h2>
      <button onClick={sidebarToggle}>open/close</button>
    </aside>
  );
};
