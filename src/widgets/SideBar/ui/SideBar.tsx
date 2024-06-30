import { classNames } from 'shared/lib/classNames/classNames';

import classes from './sidebar.module.scss';
import { useState } from 'react';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

import UserIcon from 'shared/assets/icons/UserIcon.svg';

export const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.sidebar_open]: isSidebarOpen }, [])}>
      <div className={classNames(classes.sidebar__item)}>
        <UserIcon className={classNames(classes.sidebar__icon)} />
        {isSidebarOpen && <span>Войти</span>}
      </div>
      <AppButton
        data-testid="sidebar-toggle"
        foreignClasses={classes.sidebar__btn}
        onClick={sidebarToggle}
        theme={ThemeButton.ROUNDED}>
        {isSidebarOpen ? '<' : '>'}
      </AppButton>
    </aside>
  );
};
