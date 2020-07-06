import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import * as orderActions from '~/store/modules/order/actions';

import { Container } from './styles';

export default function Select(props) {
  const [valueRecipient, setValueRecipient] = useState({});
  const [valueDeliveryMan, setValueDeliveryMan] = useState({});
  const [optionsRecipients, SetOptionRecipient] = useState([]);
  const [optionsDeliveryMan, SetOptionDeliveryMan] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.order);

  async function loadDeliveryman() {
    const response = await api.get('deliveryman');
    response.data.map((d) =>
      SetOptionDeliveryMan((e) => e.concat({ value: d.id, label: d.name }))
    );

    const value = {
      value: data?.deliveryMan.id,
      label: data?.deliveryMan.name,
    };

    setValueDeliveryMan(value);
    dispatch(orderActions.SetDeliveryMan(data?.deliveryMan.id));
  }

  async function loadRecipients() {
    const response = await api.get('recipient');
    response.data.map((d) =>
      SetOptionRecipient((e) => e.concat({ value: d.id, label: d.nome }))
    );

    const value = {
      value: data?.recipient.id,
      label: data?.recipient.nome,
    };

    setValueRecipient(value);
    dispatch(orderActions.SetRecipient(data?.recipient.id));
  }

  useEffect(() => {
    loadDeliveryman();
    loadRecipients();
  }, []);

  const filterDeliveryman = (value) => {
    return optionsDeliveryMan.filter((i) =>
      i.label.toLowerCase().includes(value?.toLowerCase())
    );
  };

  const deliveryManPromiseOptions = (value) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterDeliveryman(value));
      }, 1000);
    });

  const handleInputChangeDeliveryMan = (selectedOption) => {
    const { value } = selectedOption || [];
    setValueDeliveryMan(selectedOption);
    dispatch(orderActions.SetDeliveryMan(value));
  };

  const filterRecipients = (value) => {
    return optionsRecipients.filter((i) =>
      i.label.toLowerCase().includes(value?.toLowerCase())
    );
  };

  const recipientPromiseOptions = (value) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterRecipients(value));
      }, 1000);
    });

  const handleInputChangeRecipient = (selectedOption) => {
    const { value } = selectedOption || [];
    setValueRecipient(selectedOption);
    dispatch(orderActions.SetRecipient(value));
  };

  return (
    <Container>
      <div>
        <p>Destinatário</p>
        <AsyncSelect
          isClearable
          placeholder="Selecione"
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
          placeholder="Selecione"
          defaultOptions={optionsDeliveryMan}
          loadOptions={deliveryManPromiseOptions}
          onChange={handleInputChangeDeliveryMan}
          value={valueDeliveryMan}
        />
      </div>
    </Container>
  );
}
