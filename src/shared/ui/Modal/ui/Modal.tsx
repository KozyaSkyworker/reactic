import { ReactNode, useCallback, useEffect, useState } from 'react';

import classes from './modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/theme';

interface IModal {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  isLazy?: boolean;
}

export const Modal = ({ children, isOpen, onClose, isLazy }: IModal) => {
  const { theme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key == 'Escape') {
        onClose?.();
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

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if (isLazy && !isMounted) {
    return null;
  }

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
