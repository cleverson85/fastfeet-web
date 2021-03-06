import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import { FaPlus } from 'react-icons/fa';
import Avatar from 'react-avatar';

import util from '~/util/index';
import api from '~/services/api';
import * as appActions from '~/store/modules/app/actions';
import history from '~/services/history';
import MenuList from '~/components/MenuList';
import Pages from '~/components/Pagination';

import { Container, Table } from '~/components/Container/styles';

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itensPerPage] = useState(8);
  const dispatch = useDispatch();

  dispatch(appActions.visibleRequest(true));

  const { reload } = useSelector((state) => state.app);
  if (reload) {
    dispatch(appActions.reload(false));
  }

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('order');

      const data = response.data.map((order) => ({
        ...order,
        status: util.GetStatus(order),
      }));

      setOrders(data);
    }

    loadOrders();
  }, [reload]);

  async function findOrderByProductName(value) {
    const response = await api.get(`order?productName=${value}`);

    const data = response.data.map((order) => ({
      ...order,
      status: util.GetStatus(order),
    }));

    setOrders(data);
  }

  const indexOfLastPost = currentPage * itensPerPage;
  const indexOfFirstPost = indexOfLastPost - itensPerPage;
  const currents = orders.slice(indexOfFirstPost, indexOfLastPost);

  const orderCad = () => {
    dispatch(appActions.clearRequest());
    history.push('/orderedit');
  };

  return (
    <Container>
      <div>
        <h1>Gerenciando encomendas</h1>
        <div>
          <Input
            name="buscar"
            type="text"
            placeholder="Buscar por encomendas"
            onChange={(e) => findOrderByProductName(e.target.value)}
          />
          <button type="button" onClick={orderCad}>
            <FaPlus color="#FFF" size={12} />
            CADASTRAR
          </button>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Produto</th>
            <th>#</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {currents.map((order) => (
            <tr key={order.id}>
              <td>
                <span>#{order.id}</span>
              </td>
              <td>
                <span>{order?.recipient?.nome}</span>
              </td>
              <td>
                <span>{order.product}</span>
              </td>
              <td>
                <span>
                  <div>
                    <Avatar
                      size="40"
                      name={order.deliveryMan?.name}
                      round="100%"
                      src={order.deliveryMan?.avatar?.url}
                    />
                  </div>
                </span>
              </td>
              <td>
                <span>{order.deliveryMan?.name}</span>
              </td>
              <td>
                <span>{order.recipient?.cidade}</span>
              </td>
              <td>
                <span>{order.recipient?.estado}</span>
              </td>
              <td>
                <span>{order.status}</span>
              </td>
              <td>
                <div>
                  <MenuList
                    path="/orderedit"
                    id={order.id}
                    messageConfirm={`Confirma exclusão da encomenda ${order.product} para o destinatário ${order.recipient?.nome}?`}
                    order={order}
                    status={order.status}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pages totalItemsCount={orders.length} setCurrentPage={setCurrentPage} />
    </Container>
  );
}
