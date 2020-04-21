import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';
import { Status } from './styles';

export default function GetStatus(order) {
  if (order.canceled_at) {
    return (
      <Status status="cancelado">
        <MdFiberManualRecord />
        CANCELADA
      </Status>
    );
  }

  if (order.start_date && order.end_date) {
    return (
      <Status status="entregue">
        <MdFiberManualRecord />
        ENTREGUE
      </Status>
    );
  }

  if (order.start_date && !order.end_date) {
    return (
      <Status status="retirado">
        <MdFiberManualRecord />
        RETIRADA
      </Status>
    );
  }

  return (
    <Status status="pendente">
      <MdFiberManualRecord />
      PENDENTE
    </Status>
  );
}
