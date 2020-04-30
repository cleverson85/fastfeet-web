import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import CepMask from '~/util/cepMask';
import apiCep from '~/services/apiCep';
import history from '~/services/history';
import * as recipientActions from '~/store/modules/recipient/actions';

import { Container, Button } from './styles';

export default function DeliveryManEdit() {
  const [titulo, setTitulo] = useState('Cadastro de destinatário');
  // const [cep, setCep] = useState(null);
  const [id, setRecipientId] = useState(null);

  const dispatch = useDispatch();

  const recipient = useSelector((state) => state.recipient.data);

  useEffect(() => {
    if (recipient && recipient.id > 0) {
      setTitulo('Edição de destinatário');
      setRecipientId(recipient.id);
    }
  }, [recipient]);

  const handleBack = () => {
    history.push('/recipient');
  };

  async function handleCep(e) {
    const response = await apiCep(e);
    const { data } = response;
    const { cep, logradouro: rua, localidade: cidade, uf: estado } = data;

    dispatch(
      recipientActions.setLocation({
        cep,
        logradouro: rua,
        localidade: cidade,
        uf: estado,
      })
    );
  }

  const handleSubmit = (values) => {
    const { nome, cep, rua, numero, cidade, estado, complemento } = values;
    dispatch(
      recipientActions.addRequest({
        id,
        nome,
        cep,
        rua,
        numero,
        cidade,
        estado,
        complemento,
      })
    );
  };

  const handleSaveButton = () => {
    document.getElementById('Salvar').click();
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

          <Button label="salvar" onClick={handleSaveButton}>
            <FaCheck color="#FFF" size={12} />
            SALVAR
          </Button>
        </div>
      </div>
      <Form initialData={recipient} onSubmit={handleSubmit}>
        <Input name="nome" label="Nome" />
        <div>
          <div>
            <Input
              name="cep"
              onBlur={(e) => handleCep(e.target.value)}
              label="Cep"
            />
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
        <button type="submit" id="Salvar" label="Salvar" />
      </Form>
    </Container>
  );
}
