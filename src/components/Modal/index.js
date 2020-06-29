import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { parseISO } from 'date-fns';
import format from 'date-fns/format';

import * as appActions from '~/store/modules/app/actions';

import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { openModal, description, type, order } = useSelector(
    (state) => state.app
  );
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(appActions.viewModalRequest(false, '', type));
  };

  useEffect(() => {
    if (openModal) {
      handleOpen();
    }
  }, [openModal]);

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {type === 'issue' ? (
            <Container>
              <h3>VISUALIZAR PROBLEMA</h3>
              <p>{description}</p>
            </Container>
          ) : (
            <Container>
              <h3>Informações da encomenda</h3>
              <p>
                Rua {order?.recipient?.rua}, {order?.recipient?.numero}
              </p>
              <p>
                {order?.recipient?.cidade} - {order?.recipient?.estado}
              </p>
              <p>{order?.recipient?.cep}</p>
              <h3>Data retirada:</h3>
              <p>
                {order?.start_date
                  ? format(parseISO(order?.start_date), 'dd/MM/yyyy')
                  : '-- / -- / ----'}
              </p>
              <h3>Data entrega:</h3>
              <p>
                {order?.end_date
                  ? format(parseISO(order?.end_date), 'dd/MM/yyyy')
                  : '-- / -- / ----'}
              </p>
              <h3>Assinatura do destinatário</h3>
              <img
                src="https://api.adorable.io/avatars/145/abott@adorable.png"
                alt="Logo"
              />
            </Container>
          )}
        </Fade>
      </Modal>
    </div>
  );
}

export default SimpleModal;
