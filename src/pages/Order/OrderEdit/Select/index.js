import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { useDispatch, useSelector } from 'react-redux';
import api from '~/services/api';

import * as orderActions from '~/store/modules/order/actions';
import { Container } from './styles';

export default function Select() {
  const [recipients, setRecipients] = useState([]);
  const [deliveryMans, setDeliveryMans] = useState([]);

  const [valueRecipient, setValueRecipient] = useState();
  const [valueDeliveryMan, setValueDeliveryMan] = useState();
  const optionsDeliveryman = [{ id: null, label: '' }];
  const optionsRecipients = [{ id: null, label: '' }];

  const dispatch = useDispatch();

  useEffect(() => {
    async function load() {
      const resDeliveryman = await api.get('deliveryman');
      setDeliveryMans(resDeliveryman.data);

      const resRecipients = await api.get('recipient');
      setRecipients(resRecipients.data);
    }

    load();
  }, []);

  deliveryMans.map((d) => {
    return optionsDeliveryman.push({ id: d.id, label: d.name });
  });

  const filterDeliveryman = (value) => {
    return optionsDeliveryman.filter((i) =>
      i.label.toLowerCase().includes(value.toLowerCase())
    );
  };

  const deliveryManPromiseOptions = (value) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterDeliveryman(value));
      }, 1000);
    });

  const handleInputChangeDeliveryMan = (selectedOption) => {
    setValueDeliveryMan(selectedOption);
    dispatch(orderActions.SetOrder(selectedOption));
  };

  recipients.map((d) => {
    return optionsRecipients.push({ id: d.id, label: d.nome });
  });

  const filterRecipients = (value) => {
    return optionsRecipients.filter((i) =>
      i.label.toLowerCase().includes(value.toLowerCase())
    );
  };

  const recipientPromiseOptions = (value) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterRecipients(value));
      }, 1000);
    });

  const handleInputChangeRecipient = (selectedOption) => {
    setValueRecipient(selectedOption);
    dispatch(orderActions.SetOrder(valueRecipient || ''));
  };

  return (
    <Container>
      <div>
        <p>Destinatário</p>
        <AsyncSelect
          isClearable
          defaultOptions={optionsRecipients}
          loadOptions={recipientPromiseOptions}
          onChange={handleInputChangeRecipient}
          value={valueRecipient}
        />
      </div>
      <span />
      <div>
        <p>Entregador</p>
        <AsyncSelect
          isClearable
          defaultOptions={optionsDeliveryman}
          loadOptions={deliveryManPromiseOptions}
          onChange={handleInputChangeDeliveryMan}
          value={valueDeliveryMan}
        />
      </div>
    </Container>
  );
}
