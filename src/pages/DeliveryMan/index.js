import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import { FaPlus } from 'react-icons/fa';
import Avatar from 'react-avatar';

import api from '~/services/api';
import history from '~/services/history';
import * as appActions from '~/store/modules/app/actions';
import MenuList from '~/components/MenuList';
import Pages from '~/components/Pagination';

import { Container, Table } from '~/components/Container/styles';

export default function DeliveryMan() {
  const [deliveryMans, setdeliveryMan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itensPerPage] = useState(8);
  const dispatch = useDispatch();

  dispatch(appActions.visibleRequest(false));

  useEffect(() => {
    async function loadDeliveryMan() {
      const response = await api.get('deliveryman');
      setdeliveryMan(response.data);
    }

    loadDeliveryMan();
  }, []);

  async function findDeliveryManByName(value) {
    const response = await api.get(`deliveryman?name=${value}`);
    setdeliveryMan(response.data);
  }

  const deliverManCad = () => {
    dispatch(appActions.clearRequest());
    history.push('/deliverymanedit');
  };

  const indexOfLastPost = currentPage * itensPerPage;
  const indexOfFirstPost = indexOfLastPost - itensPerPage;
  const currents = deliveryMans.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container>
      <div>
        <h1>Gerenciando entregadores</h1>
        <div>
          <Input
            name="buscar"
            type="text"
            placeholder="Buscar por entregadores"
            onChange={(e) => findDeliveryManByName(e.target.value)}
          />
          <button type="button" onClick={deliverManCad}>
            <FaPlus color="#FFF" size={12} />
            CADASTRAR
          </button>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {currents.map((d) => (
            <tr key={d.id}>
              <td>
                <span>#{d.id}</span>
              </td>
              <td>
                <span>
                  <Avatar
                    size="40"
                    name={d.name}
                    round="100%"
                    src={
                      d.avatar === null
                        ? 'https://api.adorable.io/avatars/149/abott@adorable.png'
                        : d.avatar.url
                    }
                  />
                </span>
              </td>
              <td>
                <span>{d.name}</span>
              </td>
              <td>
                <span>{d.email}</span>
              </td>
              <td>
                <div>
                  <MenuList
                    path="/deliverymanedit"
                    id={d.id}
                    messageConfirm={`Confirma exclusão do entregador ${d.name}?`}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pages
        totalItemsCount={deliveryMans.length}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}
