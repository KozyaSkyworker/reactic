import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children: ReactNode;
  domNode?: HTMLElement;
}

export const Portal = ({ children, domNode = document.body }: IPortal) => {
  return createPortal(children, domNode);
};
