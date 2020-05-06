import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Menu,
  Order,
  Deliveryman,
  Recipient,
  Issues,
  User,
} from './styles';

import logofastfeet from '~/assets/images/logo.png';

export default function DefaultLayout({ children }) {
  const user = useSelector((state) => state.user.profile.name);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logOut());
  }

  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <img src={logofastfeet} alt="FastFeet" width="300px" />
        </Link>
        <Menu>
          <Order to="/order">ENCOMENDAS</Order>
          <Deliveryman to="/deliveryman">ENTREGADORES</Deliveryman>
          <Recipient to="/recipient">DESTINATÁRIOS</Recipient>
          <Issues to="/issues">PROBLEMAS</Issues>
        </Menu>
        <User>
          <p>{user}</p>
          <button type="button" onClick={handleLogOut}>
            sair do sistema
          </button>
        </User>
      </Header>
      {children}
    </Container>
  );
}

DefaultLayout.prototype = {
  children: PropTypes.element.isRequired,
};
