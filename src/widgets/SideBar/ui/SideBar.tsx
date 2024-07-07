import { classNames } from 'shared/lib/classNames/classNames';

import classes from './sidebar.module.scss';
import { useCallback, useState } from 'react';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

import UserIcon from 'shared/assets/icons/UserIcon.svg';
import { Portal } from 'shared/Portal';
import { LoginModal } from 'features/AuthByUsername';

export const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const sidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.sidebar_open]: isSidebarOpen }, [])}>
      <div className={classNames(classes.sidebar__item)} onClick={onShowModal}>
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
      <Portal>
        <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
      </Portal>
    </aside>
  );
};
