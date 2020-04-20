import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';
import Loginlayout from '~/pages/_layouts/login';
import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';

import { store } from '~/store';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  const Layout = signed && isPrivate ? DefaultLayout : Loginlayout;

  if (!signed) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Login />
          </Layout>
        )}
      />
    );
  }

  Component = rest.path === '/' ? Dashboard : Component;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.prototype = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: true,
};
