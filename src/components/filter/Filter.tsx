// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Styles
import vector from './icons/vector.svg';

import * as S from './Filter.styles';

// Images

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Component income={isOpen} onClick={handleClick}>
      <p>All</p>
      <Image src={vector} alt="icon" />
    </S.Component>
  );
};

export default Filter;
