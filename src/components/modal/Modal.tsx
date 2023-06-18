// React
import * as React from 'react';

// Styles
import * as S from './Modal.styles';

// Models
import { ModalProps } from './models';

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <S.Component open={open} onClose={onClose}>
      {children}
    </S.Component>
  );
};

export default Modal;
