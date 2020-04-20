import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';
import { Status } from './styles';

function getStatus(order) {
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

function CepMask(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{3})/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
}

export default { getStatus, CepMask };
