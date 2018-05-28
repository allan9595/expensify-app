import React from 'react';
import authReducer from '../../reducers/auth';

test('should login from firebase auth', () => {
  const uid = "1234567"
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer(uid,action);
  expect(state.uid).toEqual(action.uid);
});

test('should logout from firebase auth', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({uid: '1'},action);
  expect(state).toEqual({});
});
