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

export function confirmSuccess(payload) {
  return {
    type: '@app/CONFIRM_SUCCESS',
    payload,
  };
}
