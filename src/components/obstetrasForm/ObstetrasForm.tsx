// React
import { useEffect, useState } from 'react';

// Styles
import * as S from './ObstetrasForm.styles';

// Models
import { ObstetrasFormProps } from './models';
import { IObstcares } from 'models';

// Formik
import { ErrorMessage, FormikProvider, useFormik } from 'formik';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';

// Hooks
import useValidationSchema from 'hooks/useValidationSchema';

const ObstetrasForm = ({ data, setData, onClose }: ObstetrasFormProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: IObstcares = {
    name: '',
    email: '',
    telefone: '',
    crm: '',
  };

  const formik = useFormik({
    validationSchema: useValidationSchema(),
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: () => { },
  });

  useEffect(() => {
    if (!formik.values.name || !formik.values.email || !formik.values.telefone || !formik.values.crm) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [formik.values.name, formik.values.email, formik.values.telefone, formik.values.crm]);

  const handleCloseModal = () => {
    onClose();
  };

  const onFinish = async () => {
    setIsLoading(true);
    try {
      const newItem = {
        id: data.length + 1,
        name: formik.values.name,
        email: '',
        perfilImage: null,
        numerosDeGestantes: 0,
        telefone: formik.values.name,
        estadoOndeReside: 'XX',
        dataDaCriacao: '15/06/2023',
        ultimaAtividade: 'Just now',
      };

      setData([...data, newItem]);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
      handleCloseModal();
    }
  };

  return (
    <S.Container>
      <h2>Adicionar</h2>
      <FormikProvider value={formik}>
        <div className="form_itens">
          <div className="form-input">
            <ErrorMessage className="err" name="name" component="div" />
            <Input
              key="input-name"
              id="name"
              title="Nome"
              type="text"
              placeholder="Escreva aqui..."
              data-testid="name"
              onChange={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
              value={formik.values.name}
              autocomplete="current-name"
            />
          </div>
          <div className="form-input">
            <ErrorMessage className="err" name="email" component="div" />
            <Input
              key="input-email"
              id="email"
              title="Email"
              type="text"
              placeholder="Escreva aqui..."
              data-testid="email"
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              autocomplete="current-email"
            />
          </div>
          <div className="form-input">
            <ErrorMessage className="err" name="phone" component="div" />
            <Input
              key="input-phone"
              id="phone"
              title="Telefone"
              type="text"
              mask="(99) 9999-9999"
              placeholder="Escreva aqui..."
              data-testid="phone"
              onChange={formik.handleChange('phone')}
              onBlur={formik.handleBlur('phone')}
              value={formik.values.telefone}
              autocomplete="current-phone"
            />
          </div>
          <div className="form-input">
            <ErrorMessage className="err" name="crm" component="div" />
            <Input
              key="input-crm"
              id="crm"
              title="CRM"
              type="text"
              placeholder="00000"
              data-testid="crm"
              onChange={formik.handleChange('crm')}
              onBlur={formik.handleBlur('crm')}
              value={formik.values.crm}
              autocomplete="current-crm"
            />
          </div>
        </div>
        <div className="actions">
          <Button label="Cancel" type="primary" onClick={handleCloseModal} />
          <Button
            label="Salvar e enviar senha"
            disabled={isDisabled}
            loading={isLoading}
            type="secondary"
            onClick={onFinish}
          />
        </div>
      </FormikProvider>
    </S.Container>
  );
};

export default ObstetrasForm;
