import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { loginRequest } from '~/store/modules/auth/actions';

import { Container, Header } from './styles';
import logo from '~/assets/images/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatpória.'),
});

export default function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="FastFeet" width="300px" />
      </Header>
      <Form onSubmit={handleSubmit} schema={schema}>
        <div>
          <p>SEU E-EMAIL</p>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
        </div>
        <div>
          <p>SUA SENHA</p>
          <Input name="password" type="password" placeholder="**********" />
        </div>
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
