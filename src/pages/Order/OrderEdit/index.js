import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import Select from './Select';
import history from '~/services/history';
import * as orderActions from '~/store/modules/order/actions';

import { Container, Button } from './styles';

export default function DeliveryManEdit() {
  const [titulo, setTitulo] = useState('Cadastro de encomendas');
  const [id, setId] = useState(null);

  const dispatch = useDispatch();

  const { order } = useSelector((state) => state.order);

  useEffect(() => {
    if (order) {
      setTitulo('Edição de encomendas');
      setId(order.id);
    }
  }, [order]);

  const handleBack = () => {
    history.push('/order');
  };

  const handleSubmit = () => {
    // order.id = id;
    console.tron.log(order);
    dispatch(orderActions.addRequest(order));
  };

  const hancleProduct = (e) => {
    dispatch(orderActions.SetProduct(e.target.value));
  };

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
      <Form initialData={order}>
        <Select />
        <div>
          <Input
            name="product"
            label="Nome do Produto"
            onBlur={hancleProduct}
          />
        </div>
      </Form>
    </Container>
  );
}
