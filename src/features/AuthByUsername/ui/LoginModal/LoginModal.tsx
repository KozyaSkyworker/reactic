import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface ILoginModal {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: ILoginModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isLazy={true}>
      <Suspense fallback={<p>Loading...</p>}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
