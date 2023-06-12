// React
import * as React from 'react';

// Styles
import * as S from './Broadcast.styles';

// Models
type BroadcastProps = {
  name: string;
};

const Broadcast = ({ name }: BroadcastProps) => {
  return (
    <S.Component>
      <h2>{name}</h2>
    </S.Component>
  );
};

export default Broadcast;
