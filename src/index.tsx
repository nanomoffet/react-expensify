import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'react-dates/initialize';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(
    addExpense({ description: 'Water Bill', amount: 4500, createdAt: 5 })
);
store.dispatch(
    addExpense({ description: 'Gas Bill', amount: 1000, createdAt: 10 })
);
store.dispatch(
    addExpense({ description: 'Rent', amount: 109500, createdAt: 2 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
