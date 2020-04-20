import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import AvatarInput from './AvatarInput';

import history from '~/services/history';
import * as deliveryManActions from '~/store/modules/deliveryman/actions';

import { Container, Button } from '~/components/ContainerEdit/styles';

export default function DeliveryManEdit() {
  const [titulo, setTitulo] = useState('Cadastro de entregadores');
  const [id, setId] = useState(null);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.deliveryman.data);

  useEffect(() => {
    if (data) {
      setTitulo('Edição de entregadores');
      setId(data.id);
    }
  }, [data]);

  const handleBack = () => {
    history.push('/deliveryman');
  };

  function handleSubmit() {
    dispatch(
      deliveryManActions.addRequest({
        id,
        name: document.getElementsByName('name')[0].value,
        email: document.getElementsByName('email')[0].value,
        avatar_id: document.getElementById('avatar').dataset.file,
      })
    );
  }

  return (
    <Container>
      <div>
        <h1>{titulo}</h1>
        <div>
          <Button label="voltar" onClick={handleBack}>
            <FaArrowLeft color="#FFF" size={12} />
            VOLTAR
          </Button>

          <Button label="salvar" onClick={handleSubmit}>
            <FaCheck color="#FFF" size={12} />
            SALVAR
          </Button>
        </div>
      </div>
      <Form initialData={data}>
        <AvatarInput name="avatar_id" />
        <p>Nome</p>
        <Input name="name" />
        <p>Email</p>
        <Input name="email" type="email" disabled={id > 0 ? 'disabled' : ''} />
      </Form>
    </Container>
  );
}
