// React
import * as React from 'react';

// Styles
import * as S from './Button.styles';

// Models
import { IButtonProps } from './models';

const Button = ({
  label,
  onClick,
  isSubmit,
  loading,
  disabled,
  active,
  className,
  type = 'primary',
}: IButtonProps) => {
  return (
    <S.Component
      className={`${[type]} ${className} ${active ? 'active' : ''}`}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <p>{label}</p>
      )}
    </S.Component>
  );
};

export default Button;
