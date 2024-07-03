import { classNames } from 'shared/lib/classNames/classNames';

import classes from './sidebar.module.scss';
import { useCallback, useState } from 'react';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

import UserIcon from 'shared/assets/icons/UserIcon.svg';
import { Modal } from 'shared/ui/Modal';
import { Portal } from 'shared/Portal';

export const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const sidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.sidebar_open]: isSidebarOpen }, [])}>
      <div className={classNames(classes.sidebar__item)} onClick={() => setIsModalOpen(true)}>
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
        <Modal isOpen={isModalOpen} onClose={onToggleModal}>
          <p>3</p>
        </Modal>
      </Portal>
    </aside>
  );
};
