import { parseISO } from 'date-fns';
import format from 'date-fns/format';
import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';
import { Status } from './styles';

const util = {
  FormatDate(value) {
    return format(parseISO(value), 'dd/MM/yyyy');
  },

  CepMask(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{3})/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  },

  GetStatus(order) {
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
  },
};

export default util;
