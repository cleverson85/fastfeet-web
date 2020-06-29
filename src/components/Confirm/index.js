import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import * as appActions from '~/store/modules/app/actions';

export default function ConfirmDialog() {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { open, messageConfirm, id, path } = useSelector((state) => state.app);

  useEffect(() => {
    setMessage(messageConfirm);
  }, [messageConfirm]);

  const handleClose = () => {
    dispatch(appActions.confirmRequest(false, 0, ''));
  };

  const handleConfirm = () => {
    dispatch(appActions.confirmSucess(id, path));
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
