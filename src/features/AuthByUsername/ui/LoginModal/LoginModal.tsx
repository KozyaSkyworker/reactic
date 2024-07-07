import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModal {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: ILoginModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isLazy={true}>
      <LoginForm />
    </Modal>
  );
};
