import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '~/services/api';

import * as appActions from '~/store/modules/app/actions';
import MenuList from '~/components/MenuList';
import { Container, Table } from '~/components/Container/styles';

export default function Issues() {
  const [issues, setIssue] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadIssues() {
      const response = await api.get('deliveryissues');
      setIssue(response.data);
    }

    loadIssues();
    dispatch(appActions.visibleRequest(false));
  }, [dispatch]);

  return (
    <Container>
      <div>
        <h1>Problemas na entrega</h1>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>
                <span>#{issue.order.id}</span>
              </td>
              <td>
                <span>{issue.description}</span>
              </td>
              <td>
                <MenuList />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
