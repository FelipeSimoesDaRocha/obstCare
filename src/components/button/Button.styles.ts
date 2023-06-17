import styled from 'styled-components';

export const Component = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 187px;
  height: 40px;
  border-radius: 8px;

  &.primary {
    background: #F6F6F6;
    transition: opacity 500ms;

    p {
      color: #4340da;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:not(&:disabled) {
      &:hover {
        opacity: 85%;
        transition: opacity 500ms;
      }
    }
  }

  &.secondary {
    background: #4340da;
    transition: opacity 500ms;

    p {
      color: #F6F6F6;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:not(&:disabled) {
      &:hover {
        opacity: 85%;
        transition: opacity 500ms;
      }
    }
  }
`;
