import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './Router/AppRouter';

const store = configureStore();

store.dispatch(addExpense({description:'Water Bill',amount:4500}));
store.dispatch(addExpense({description:'Gas Bill', createAt: 1000}));
store.dispatch(addExpense({description:'Rent',amount:109500 }));
store.dispatch(setTextFilter(''));

/*setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
},3000)
*/
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
