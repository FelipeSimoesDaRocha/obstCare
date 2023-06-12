// React
import * as React from 'react';

// Styles
import * as S from './Button.styles';

// Models
import { IButtonProps } from './models';

const Button = ({ label, onClick }: IButtonProps) => {
  return (
    <S.Component onClick={onClick}>
      <S.Text>{label}</S.Text>
    </S.Component>
  );
};

export default Button;
