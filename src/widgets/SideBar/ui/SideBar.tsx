import { classNames } from 'shared/lib/classNames/classNames';

import classes from './sidebar.module.scss';
import { useState } from 'react';

export const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.sidebar_open]: isSidebarOpen }, [])}>
      <h2>SideBar</h2>
      <button data-testid="sidebar-toggle" onClick={sidebarToggle}>
        open/close
      </button>
    </aside>
  );
};
