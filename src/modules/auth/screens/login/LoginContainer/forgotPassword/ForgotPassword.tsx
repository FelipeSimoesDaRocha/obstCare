// React
import { useEffect, useState } from 'react';

// Formik
import { FormikProvider } from 'formik';

// Hook
import { useForm } from '../useForm';

const ForgotPassword = () => {
  const { formik } = useForm();

  return <FormikProvider value={formik}></FormikProvider>;
};

export default ForgotPassword;
