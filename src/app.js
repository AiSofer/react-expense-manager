import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'fart bill', amount: 100, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'dudi bill', amount: 300, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'poopies bill', amount: 200, createdAt: 200 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);
const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);