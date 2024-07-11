import { classNames } from 'shared/lib/classNames/classNames';

import classes from './sidebar.module.scss';
import { useCallback, useState } from 'react';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

import UserIcon from 'shared/assets/icons/UserIcon.svg';
import UserLogout from 'shared/assets/icons/UserLogout.svg';
import { Portal } from 'shared/Portal';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

export const SideBar = () => {
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const sidebarToggle = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.sidebar_open]: isSidebarOpen }, [])}>
      {authData ? (
        <div className={classNames(classes.sidebar__item)} onClick={onLogout}>
          <UserLogout className={classNames(classes.sidebar__icon)} />
          {isSidebarOpen && <span className={classNames(classes.sidebar__icon_text)}>Выйти</span>}
        </div>
      ) : (
        <div className={classNames(classes.sidebar__item)} onClick={onShowModal}>
          <UserIcon className={classNames(classes.sidebar__icon)} />
          {isSidebarOpen && <span className={classNames(classes.sidebar__icon_text)}>Войти</span>}
        </div>
      )}

      <AppButton
        data-testid="sidebar-toggle"
        foreignClasses={classes.sidebar__btn}
        onClick={sidebarToggle}
        theme={ThemeButton.ROUNDED}>
        {isSidebarOpen ? '<' : '>'}
      </AppButton>
      {isModalOpen && (
        <Portal>
          <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
        </Portal>
      )}
    </aside>
  );
};
