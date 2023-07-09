// Next
import { useRouter } from 'next/router';

// React
import { useState } from 'react';

// Models
import { IUserLoginAndPassword, LoginResponseDto, ToastTypeEnum, userLoginById } from 'models';

// Context
import { saveUser } from 'context/features/user';
import { useAppDispatch } from 'context/hooks';

// Api
import { useGetUser } from 'services/api/login';

// Firebase
import { useFirebase } from 'services/firebase';

// Formik
import { useFormik } from 'formik';

// Cookie
import Cookie from 'universal-cookie';

// Hooks
import useValidationSchema from 'hooks/useValidationSchema';

// Common
import { AsyncStorageKeys } from 'common/constants/asyncStorageKeys';

export const useForm = (onClickForgotPassword?: () => void, oobCode?: string | undefined) => {
  const dispatch = useAppDispatch()

  const { mutateAsync } = useGetUser();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkedRememberMe, setCheckedRememberMe] = useState(false);
  const initialValues: IUserLoginAndPassword = {
    email: '',
    password: '',
    newPassword: '',
  };
  const [responseDescription, setResponseDescription] = useState<{
    title: string;
    type: ToastTypeEnum;
  }>();

  const formik = useFormik({
    validationSchema: useValidationSchema(),
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: () => { },
  });

  const { handleSingIn, handleRecover, handleConfirmPasswordReset, checkAction } = useFirebase({
    email: formik.values.email,
    password: formik.values.password,
  });

  // Returns errors
  const handleSingInError = (error: { code: string }) => {
    if (error.code === LoginResponseDto.USER_NOT_FOUND) {
      setResponseDescription({
        title: 'email-not-found',
        type: ToastTypeEnum.ERROR,
      });
    }
    if (error.code === LoginResponseDto.WRONG_PASSWORD) {
      setResponseDescription({
        title: 'password-wrong',
        type: ToastTypeEnum.ERROR,
      });
    }
  };

  // Login
  const onSignIn = async () => {
    setIsLoading(true);
    try {
      const response: any = await handleSingIn();
      const responseGetUser = await mutateAsync(response.user.uid);
      const dataGetUser: userLoginById = await responseGetUser.json();

      dispatch(saveUser(dataGetUser))

      localStorage.setItem(AsyncStorageKeys.USER_DATA_LOGIN_FIREBASE, JSON.stringify(response.idToken));

      if (checkedRememberMe) {
        localStorage.setItem(AsyncStorageKeys.USER_DATA_LOGIN_GETBYID, JSON.stringify(dataGetUser));
      }

      setResponseDescription({
        title: 'sucess',
        type: ToastTypeEnum.SUCCESS,
      });

      router.push('/dashboard');
    } catch (error: any) {
      if (error.code) {
        handleSingInError(error);
        return;
      }
      setResponseDescription({
        title: 'api-error-login',
        type: ToastTypeEnum.ERROR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Send password recovery email
  const handleForgotPassword = async () => {
    setIsLoading(true);
    try {
      await handleRecover();
      setResponseDescription({
        title: 'email_send',
        type: ToastTypeEnum.SUCCESS,
      });
    } catch (error: any) {
      if (error.code) {
        handleSingInError(error);
        return;
      }
      setResponseDescription({
        title: 'api-error-login',
        type: ToastTypeEnum.ERROR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Send new password
  const handleSubmitNewPassword = async () => {
    setIsLoading(true);
    try {
      const newPassword = formik.values.newPassword;

      if (oobCode) {
        await checkAction(oobCode); // Check if the code is valid
        await handleConfirmPasswordReset(oobCode, newPassword);
      }

      setResponseDescription({
        title: 'success',
        type: ToastTypeEnum.SUCCESS,
      });
      router.push('/login');
    } catch (error: any) {
      setResponseDescription({
        title: 'api-error-login',
        type: ToastTypeEnum.ERROR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Remember login
  const onChangeRememberMe = (checked: boolean) => {
    setCheckedRememberMe(checked);

    const cookie = new Cookie();
    if (!checked) {
      cookie.remove('remember_me_username');
      cookie.remove('remember_me_password');
      return;
    }

    cookie.set('remember_me_username', formik.values.email);
    cookie.set('remember_me_password', formik.values.password, {
      sameSite: true,
      secure: true,
    });
  };

  // Control screen state
  const clickGoBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onClickForgotPassword?.();
  };

  return {
    formik,
    onSignIn,
    handleForgotPassword,
    handleSubmitNewPassword,
    isLoading,
    checkedRememberMe,
    clickGoBack,
    onChangeRememberMe,
    responseDescription,
  };
};
