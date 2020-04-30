import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import { FaPlus } from 'react-icons/fa';
import Avatar from 'react-avatar';
import GetStatus from '~/util/status';
import api from '~/services/api';
import * as appActions from '~/store/modules/app/actions';
import history from '~/services/history';

import MenuList from '~/components/MenuList';
import { Container, Table } from '~/components/Container/styles';

export default function Order() {
  const [orders, setOrders] = useState([]);

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
        status: GetStatus(order),
      }));

      setOrders(data);
    }

    loadOrders();
  }, [reload]);

  async function findOrderByProductName(value) {
    const response = await api.get(`order?productName=${value}`);

    const data = response.data.map((order) => ({
      ...order,
      status: GetStatus(order),
    }));

    setOrders(data);
  }

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
            onBlur={(e) => findOrderByProductName(e.target.value)}
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
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <span>#{order.id}</span>
              </td>
              <td>
                <span>{order.recipient.nome}</span>
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
                    {order.deliveryMan?.name}
                  </div>
                </span>
              </td>
              <td>
                <span>{order.recipient.cidade}</span>
              </td>
              <td>
                <span>{order.recipient.estado}</span>
              </td>
              <td>
                <span>{order.status}</span>
              </td>
              <td>
                <div>
                  <MenuList
                    path="/orderedit"
                    id={order.id}
                    messageConfirm={`Confirma exclusão da encomenda ${order.product} para o destinatário ${order.recipient.nome}?`}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
