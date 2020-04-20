import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import CepMask from '~/util/util';

import history from '~/services/history';
import * as recipientActions from '~/store/modules/recipient/actions';

import { Container, Button } from './styles';

export default function DeliveryManEdit() {
  const [titulo, setTitulo] = useState('Cadastro de destinatário');
  const [cep, setCep] = useState(null);
  const [id, setId] = useState(null);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.recipient.data);

  useEffect(() => {
    if (data) {
      setTitulo('Edição de destinatário');
      setId(data.id);
    }
  }, [data]);

  const handleBack = () => {
    history.push('/recipient');
  };

  const handlechange = (e) => {};

  const handleSubmit = () => {
    dispatch(
      recipientActions.addRequest({
        id,
        nome: document.getElementsByName('nome')[0].value,
        cep: document.getElementsByName('cep')[0].value,
        rua: document.getElementsByName('rua')[0].value,
        numero: document.getElementsByName('numero')[0].value,
        cidade: document.getElementsByName('cidade')[0].value,
        estado: document.getElementsByName('estado')[0].value,
        complemento: document.getElementsByName('complemento')[0].value,
      })
    );
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
      <Form initialData={data}>
        <Input name="nome" label="Nome" />
        <div>
          <div>
            <Input name="cep" onChange={handlechange} label="Cep" />
          </div>
          <div>
            <Input name="rua" label="Rua" />
          </div>
          <div>
            <Input name="numero" type="number" label="Número" />
          </div>
        </div>
        <div>
          <div>
            <Input name="cidade" label="Cidade" />
          </div>
          <div>
            <Input name="estado" label="Estado" />
          </div>
          <div>
            <Input name="complemento" label="Complemento" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
