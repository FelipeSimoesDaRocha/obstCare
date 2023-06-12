// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// React
import { useCallback, useEffect, useMemo, useState } from 'react';

// Styles
import * as S from './Login.styles';

// Components
import { Button } from 'components/button';

import { LoginContainer } from './LoginContainer';

const LoginScreen = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1101 ?? false);
  }, [setIsMobile]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <S.Container>

    </S.Container>
  );
};

export default LoginScreen;
