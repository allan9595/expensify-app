import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id:4,
    description:'Food',
    note:'',
    amount:180,
    createdAt: 200000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([...expenses,expense]);
});

test('should edit expense', () => {
  const amount = 100000;
  const action = {
    type:'EDIT_EXPENSE',
    id:expenses[1].id,
    updates:{
      amount
    }
  };
  const state = expensesReducer(expenses,action);
  expect(state[1].amount).toBe(amount);
});

test('should edit expense', () => {
  const amount = 100000;
  const action = {
    type:'EDIT_EXPENSE',
    id:'-1',
    updates:{
      amount
    }
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});
