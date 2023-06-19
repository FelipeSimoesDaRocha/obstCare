// React
import { useEffect, useState } from 'react';

// Styles
import * as S from './GestantesForm.styles';

// Models
import { GestantesFormProps } from './models';
import { IGestantes } from 'models';

// Formik
import { ErrorMessage, FormikProvider, useFormik } from 'formik';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { InputDate } from 'components/inputDate';
import { Select } from 'components/select';

// Hooks
import useValidationSchema from 'hooks/useValidationSchema';

const GestantesForm = ({ data, setData, onClose }: GestantesFormProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCloseModal = () => {
    onClose();
  };

  const initialValues: IGestantes = {
    obstetra: '',
    name: '',
    email: '',
    phone: '',
    date_of_birth: '',
    dum: '',
    previous_pregnancies: 0,
    previous_births: 0,
    risk: '',
  };

  const formik = useFormik({
    validationSchema: useValidationSchema(),
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: () => { },
  });

  useEffect(() => {
    if (!formik.values) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, []);

  const onFinish = async () => {
    try {
      setIsLoading(true);
      const newItem = {
        id: data.length + 1,
        ddp: '',
        user: formik.values.name,
        phone: formik.values.phone,
        obstetra: '',
        monitoring: 0,
        created_at: '',
        activity: '',
        image: null,
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
            <Select
              key="input-obstetra"
              id={'obstetra'}
              title={'Obstetra'}
              data-testid="obstetra"
              onChange={formik.handleChange('obstetra')}
              value={formik.values.obstetra}
              options={[
                { value: 1, description: 'Andrew Bojangles' },
                { value: 2, description: 'Fábio Bojangles' },
                { value: 3, description: 'José Bojangles' },
              ]}
            />
          </div>
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
              value={formik.values.phone}
              autocomplete="current-phone"
            />
          </div>
          <div className="form-input">
            <InputDate
              key="input-date_of_birth"
              id="date_of_birth"
              title="Data de nascimento"
              data-testid="date_of_birth"
              onChange={formik.handleChange('date_of_birth')}
              value={formik.values.date_of_birth}
            />
          </div>
          <div className="form-input">
            <InputDate
              key="input-dum"
              id="dum"
              title="Dum"
              data-testid="dum"
              onChange={formik.handleChange('dum')}
              value={formik.values.dum}
            />
          </div>
          <div className="form-input">
            <ErrorMessage className="err" name="name" component="div" />
            <Input
              key="input-previous_pregnancies"
              id="previous_pregnancies"
              title="Gestações prévias"
              type="text"
              placeholder=""
              data-testid="previous_pregnancies"
              onChange={formik.handleChange('previous_pregnancies')}
              onBlur={formik.handleBlur('previous_pregnancies')}
              value={formik.values.previous_pregnancies}
              autocomplete="current-previous_pregnancies"
            />
          </div>
          <div className="form-input">
            <ErrorMessage className="err" name="name" component="div" />
            <Input
              key="input-previous_births"
              id="previous_births"
              title="Partos prévios"
              type="text"
              placeholder="00"
              data-testid="previous_births"
              onChange={formik.handleChange('previous_births')}
              onBlur={formik.handleBlur('previous_births')}
              value={formik.values.previous_births}
              autocomplete="current-previous_births"
            />
          </div>
          <div className="form-input">
            <Select
              key="input-risk"
              id={'risk'}
              title={'Risco'}
              data-testid="risk"
              onChange={formik.handleChange('risk')}
              value={formik.values.risk}
              options={[
                { value: 1, description: 'Baixo' },
                { value: 2, description: 'Médio' },
                { value: 3, description: 'Alto' },
              ]}
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

export default GestantesForm;
