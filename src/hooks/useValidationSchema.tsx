// Yup
import * as yup from 'yup';

const useValidationSchema = () => {

  const emailValidation = yup
    .string()
    .test('email-validation', 'email-invalid', value => {
      if (value) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
      }
      return true;
    })
    .required('email-required');

  const passwordValidation = yup
    .string()
    .min(6, 'password-min')
    .required('password-required');

  const newPasswordValidation = yup
    .string()
    .oneOf([yup.ref('password')], 'password-match')
    .required('new-password-required')

  const validationSchema = yup.object().shape({
    email: emailValidation,
    password: passwordValidation,
    newPassword: newPasswordValidation,
  });

  return validationSchema;
};

export default useValidationSchema;
