export function addRequest({
  id,
  nome,
  cep,
  rua,
  numero,
  cidade,
  estado,
  complemento,
}) {
  return {
    type: '@recipient/ADD_REQUEST',
    payload: {
      id,
      nome,
      cep,
      rua,
      numero,
      cidade,
      estado,
      complemento,
    },
  };
}

export function editRequest(id) {
  return {
    type: '@recipient/EDIT_REQUEST',
    id,
  };
}

export function editSuccess(payload) {
  return {
    type: '@recipient/EDIT_SUCCESS',
    payload,
  };
}

export function confirmRequest(open, id, messageConfirm, path) {
  return {
    type: '@app/APP_CONFIRM_REQUEST',
    payload: { open, id, messageConfirm, path },
  };
}

export function confirmSuccess(payload) {
  return {
    type: '@app/APP_CONFIRM_SUCCESS',
    payload,
  };
}

export function setLocation({
  cep,
  logradouro: rua,
  localidade: cidade,
  uf: estado,
}) {
  return {
    type: '@recipient/LOCATION_REQUEST',
    payload: {
      cep,
      rua,
      cidade,
      estado,
    },
  };
}
