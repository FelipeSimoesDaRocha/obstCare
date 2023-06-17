import styled, { css } from 'styled-components';

type ModalProps = {
  onClose: () => void;
};

export const Component = styled.div<{ open: boolean, onClose: ModalProps["onClose"] }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 999;

  ${({ open }) =>
    open &&
    css`
      display: flex;
    `}
`;
