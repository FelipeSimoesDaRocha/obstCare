// React
import { useEffect, useState } from 'react';

// Formik
import { FormikProvider } from 'formik';

// Hook
import { useForm } from '../useForm';

const NewPassword = () => {
  const { formik } = useForm();

  return (
    <FormikProvider value={formik}>

    </FormikProvider>
  );
};

export default NewPassword;
