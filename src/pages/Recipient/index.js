import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import { FaPlus } from 'react-icons/fa';
import api from '~/services/api';
import * as appActions from '~/store/modules/app/actions';
import history from '~/services/history';

import MenuList from '~/components/MenuList';
import { Container, Table } from '~/components/Container/styles';

export default function Recipient() {
  const [recipients, setRecipient] = useState([]);

  const dispatch = useDispatch();
  dispatch(appActions.visibleRequest(false));

  const { reload } = useSelector((state) => state.app);
  if (reload) {
    dispatch(appActions.reload(false));
  }

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipient');
      setRecipient(response.data);
    }

    loadRecipients();
  }, [reload]);

  async function findRecipientByName(value) {
    const response = await api.get(`recipient?name=${value}`);
    setRecipient(response.data);
  }

  const recipientCad = () => {
    dispatch(appActions.clearRequest());
    history.push('/recipientedit');
  };

  return (
    <Container>
      <div>
        <h1>Gerenciando destinatários</h1>
        <div>
          <Input
            name="buscar"
            type="text"
            placeholder="Buscar por destinatários"
            onBlur={(e) => findRecipientByName(e.target.value)}
          />
          <button type="button" onClick={recipientCad}>
            <FaPlus color="#FFF" size={12} />
            CADASTRAR
          </button>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((r) => (
            <tr key={r.id}>
              <td>
                <span>#{r.id}</span>
              </td>
              <td>
                <span>{r.nome}</span>
              </td>
              <td>
                <span>
                  Rua {r.rua}, {r.numero}, {r.cidade} - {r.estado}
                </span>
              </td>
              <td>
                <MenuList
                  path="/recipientedit"
                  id={r.id}
                  messageConfirm={`Confirma exclusão do destinatário(a) ${r.nome}?`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
