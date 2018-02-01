import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import configureStore from './store/configerStore';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

console.log(store.getState());
// store.subscribe(() => {
//   console.log(store.getState());
// })

store.dispatch(addExpense({description: 'Water bill', amount: 200, createdAt: 1000 }));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: -20000 }));
store.dispatch(addExpense({description: 'Gas bill', amount: 100, createdAt: 1500 }));

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));