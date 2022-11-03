import React, { useState } from 'react';
import { Formik } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { useRegister } from '../../hooks/useRegister';
import FormComponent from '../reusable/form/form.components';
import { IUser } from '../../types/user.types';
import * as Styled from './register.styled';

interface IMyFormValues {
  email: string;
  password: string;
  confirm: string;
}

interface ILocation {
  state: {
    from: { pathname: string; search: string; hash: string; state: undefined };
  };
}

const Register = () => {
  const initialValues: IMyFormValues = { email: '', password: '', confirm: '' };

  const registerMutation = useRegister();
  // console.log('registerMutation', registerMutation);

  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

  const history = useHistory();

  const onClickGoBack = () => {
    history.push(link);
  };

  return (
    <Styled.Container>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Email is invalid').required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSubmit={(values, actions) => {
          const credentials: IUser = {
            email: values.email,
            password: values.password
          };
          registerMutation.mutate(credentials);
          // eslint-disable-next-line no-alert, prefer-template
          if (registerMutation.isSuccess) {
            history.push('/login');
          }

          // console.log(values, actions);
        }}
      >
        {({ errors, touched, isValid }) => (
          <FormComponent
            email="email"
            password="password"
            errors={errors}
            touched={touched}
            isValid={isValid}
            extraFieldName="confirm"
            onClickGoBack={onClickGoBack}
          />
        )}
      </Formik>
    </Styled.Container>
  );
};

export default Register;
