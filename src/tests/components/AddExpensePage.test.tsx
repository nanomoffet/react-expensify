import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../app/AddExpense/AddExpense';
import expenses from '../fixtures/expenses.fixtures';

let addExpense: any, history, wrapper: any;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <AddExpensePage addExpense={addExpense} history={history} />
    );
});

it('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should handle onSubmit', () => {
    const submit: any = wrapper.find('ExpenseForm').prop('onSubmit');
    submit(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
