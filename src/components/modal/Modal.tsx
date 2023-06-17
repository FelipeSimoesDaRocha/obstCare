// React
import { ReactNode } from 'react';

// Styles
import * as S from './Modal.styles';

// Models
type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode
};

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <S.Component open={open} onClose={onClose}>
      {children}
    </S.Component>
  );
};

export default Modal;
