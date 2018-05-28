import React from 'react';
import { login, logout} from '../../actions/auth';

test('should login from firebase' , () => {
  const uid = "1234567"
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should logout from firebase', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
