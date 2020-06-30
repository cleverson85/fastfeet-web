import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MdMoreHoriz, MdVisibility, MdCreate, MdDelete } from 'react-icons/md';

import * as deliveryManActions from '~/store/modules/deliveryman/actions';
import * as recipientActions from '~/store/modules/recipient/actions';
import * as orderActions from '~/store/modules/order/actions';
import * as appActions from '~/store/modules/app/actions';

import { Item } from './styles';

export default function MenuList(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.app.visible);
  const { id, description, messageConfirm, path, view, order, status } = props;

  console.log(status?.props.status);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Visualizar = () => {
    dispatch(appActions.viewModalRequest(true, description, view, order));
    handleClose();
  };

  const Editar = () => {
    switch (props.path) {
      case '/deliverymanedit':
        dispatch(deliveryManActions.editRequest(id));
        break;
      case '/recipientedit':
        dispatch(recipientActions.editRequest(id));
        break;
      case '/orderedit':
        dispatch(orderActions.editRequest(id));
        break;
      default:
    }

    handleClose();
  };

  const Excluir = () => {
    dispatch(appActions.confirmRequest(true, id, messageConfirm, path));

    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MdMoreHoriz color="#C6C6C6" size={30} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isVisible || view === 'issue' ? (
          <MenuItem item="visualizar" onClick={Visualizar}>
            <MdVisibility color="#8e5be8" />
            <Item>Visualizar</Item>
          </MenuItem>
        ) : null}

        {view === 'issue' ||
        status?.props.status === 'retirado' ||
        status?.props.status === 'cancelado' ? null : (
          <MenuItem item="editar" onClick={Editar}>
            <MdCreate color="#4d85ee" />
            <Item>Editar</Item>
          </MenuItem>
        )}

        {status?.props.status === 'retirado' ? null : (
          <MenuItem item="excluir" onClick={Excluir}>
            <MdDelete color="#de3b3b" />
            <Item>{view === 'issue' ? 'Cancelar encomenda' : 'Excluir'} </Item>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
