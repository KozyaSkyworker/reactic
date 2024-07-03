import { ReactNode, useCallback, useEffect } from 'react';

import classes from './modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/theme';

interface IModal {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, isOpen, onClose }: IModal) => {
  const { theme } = useTheme();

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key == 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', keyDownHandler);
    }

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [isOpen, keyDownHandler]);

  return (
    <div
      className={classNames(classes.modal, { [classes.modal_open]: isOpen }, [theme])}
      onClick={onClose}>
      <div className={classNames(classes.modal__content)} onClick={onContentClick}>
        {children}
      </div>
    </div>
  );
};
