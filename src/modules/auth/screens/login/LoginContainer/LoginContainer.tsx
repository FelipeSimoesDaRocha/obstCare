// Next
import { useRouter } from 'next/router';

// React
import { useState, useEffect } from 'react';

// Components
import { ForgotPassword } from './forgotPassword';
import { LoginForm } from './loginForm';
import { NewPassword } from './newPassword';

const LoginContainer = () => {
  const router = useRouter();
  const [showScreen, setShowScreen] = useState(false);
  const [resetPassword, setResetPassword] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(router.asPath.split('?')[1]);
    if (params.get('mode') === 'resetPassword' && params.get('oobCode')) {
      setResetPassword(params.get('oobCode'));
    }

    if (router.asPath === '/login' && resetPassword) {
      setResetPassword(null);
    }
  }, [resetPassword, router.asPath]);

  const handleSetScreen = (forgotPassword: boolean): void => {
    setShowScreen(forgotPassword);
  };

  return (
    <div className="screenContainer">
      {resetPassword ? (
        <NewPassword />
      ) : !showScreen ? (
        <LoginForm />
      ) : (
        <ForgotPassword />
      )}
    </div>
  );
};

export default LoginContainer;
