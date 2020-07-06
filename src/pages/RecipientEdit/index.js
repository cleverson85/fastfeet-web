/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';

import apiCep from '~/services/apiCep';
import history from '~/services/history';
import * as recipientActions from '~/store/modules/recipient/actions';

import { Container, Button } from './styles';

export default function DeliveryManEdit() {
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [complemento, setComplemento] = useState('');
  const [titulo, setTitulo] = useState('Cadastro de destinatário');
  const [id, setRecipientId] = useState(null);
  const dispatch = useDispatch();
  const recipient = useSelector((state) => state.recipient.data);

  useEffect(() => {
    if (recipient) {
      setTitulo(recipient.id > 0 ? 'Edição de destinatário' : titulo);
      setRecipientId(recipient.id);
      setNome(recipient.nome);
      setCep(recipient.cep);
      setRua(recipient.rua);
      setNumero(recipient.numero);
      setCidade(recipient.cidade);
      setEstado(recipient.estado);
      setComplemento(recipient.complemento);
    }
  }, [recipient, titulo]);

  async function handleCep(e) {
    const response = await apiCep(e);
    const { data } = response;
    dispatch(
      recipientActions.setLocation({
        cep: data.cep,
        rua: data.logradouro,
        cidade: data.localidade,
        estado: data.uf,
      })
    );
  }

  const handleSubmit = () => {
    if (isNaN(cep.replace('-', ''))) {
      toast.error('Cep inválido.');
      return;
    }

    if (!cep || cep === '') {
      toast.error('Cep é obrigatório.');
      return;
    }

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

  const handleBack = () => {
    history.push('/recipient');
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
      <form autoComplete="off">
        <label>Nome</label>
        <input
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <div>
          <div>
            <label>Cep</label>
            <input
              name="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={() => handleCep(cep)}
            />
          </div>
          <div>
            <label>Rua</label>
            <input
              name="rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
          </div>
          <div>
            <label>Número</label>
            <input
              name="numero"
              type="number"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Cidade</label>
            <input
              name="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div>
            <label>Estado</label>
            <input
              name="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>
          <div>
            <label>Complemento</label>
            <input
              name="complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
        </div>
      </form>
    </Container>
  );
}
