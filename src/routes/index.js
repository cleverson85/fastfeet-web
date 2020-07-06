import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import DeliveryMan from '~/pages/DeliveryMan';
import DeliveryManEdit from '~/pages/DeliveryManEdit';
import Order from '~/pages/Order';
import OrderEdit from '~/pages/OrderEdit';
import Recipient from '~/pages/Recipient';
import RecipientEdit from '~/pages/RecipientEdit';
import Issues from '~/pages/Issues';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/deliveryman" component={DeliveryMan} isPrivate />
      <Route path="/deliverymanedit" component={DeliveryManEdit} isPrivate />
      <Route path="/order" component={Order} isPrivate />
      <Route path="/orderedit" component={OrderEdit} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/recipientedit" component={RecipientEdit} isPrivate />
      <Route path="/issues" component={Issues} isPrivate />
    </Switch>
  );
}
