export function loginRequest(email, password) {
  return {
    type: '@login/AUTH_REQUEST',
    payload: { email, password },
  };
}

export function loginSuccess(token, user) {
  return {
    type: '@login/AUTH_SUCCESS',
    payload: { token, user },
  };
}

export function loginFailure() {
  return {
    type: '@login/AUTH_FAILURE',
  };
}

export function logOut() {
  return {
    type: '@login/LOG_OUT',
  };
}
