import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup';
import { IUser } from '../../types/user.types';
import { useLogin } from '../../hooks/useLogin';
import FormComponent from '../reusable/form/form.components';
import * as Styled from '../register/register.styled';

interface IMyFormValues {
  email: string;
  password: string;
}

interface ILocation {
  state: {
    from: { pathname: string; search: string; hash: string; state: undefined };
  };
}

interface IResponse {
  data: {
    data: {
      token: string;
      user: {
        email: string;
        _id: string;
      };
    };
  };

  mutate: (data: IUser) => void;
}

const Login = () => {
  const initialValues: IMyFormValues = { email: '', password: '' };

  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

  const loginMutation = useLogin();

  const { data } = loginMutation as IResponse;
  // console.log('loginMutation.data', loginMutation);

  useEffect(() => {
    if (data?.data?.token) {
      window.localStorage.setItem('token', JSON.stringify(data?.data?.token));
    }
  }, [loginMutation]);

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
            .required('Password is required')
        })}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSubmit={(values, actions) => {
          const credentials: IUser = {
            email: values.email,
            password: values.password
          };
          loginMutation.mutate(credentials);
          setTimeout(() => history.push('/home'), 1000);
        }}
      >
        {({ errors, touched, isValid }) => (
          <FormComponent
            email="email"
            password="password"
            errors={errors}
            touched={touched}
            isValid={isValid}
            onClickGoBack={onClickGoBack}
          />
        )}
      </Formik>
    </Styled.Container>
  );
};

export default Login;
