// Next
import { useRouter } from 'next/router';

// React
import { useEffect, useState } from 'react';

// Formik
import { FormikProvider } from 'formik';

// Hook
import { useForm } from '../useForm';


const LoginForm = () => {
  const router = useRouter();

  const { formik } = useForm();

  return <FormikProvider value={formik}></FormikProvider>;
};

export default LoginForm;
