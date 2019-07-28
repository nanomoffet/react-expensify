import React from 'react';
import { EditExpensePage } from '../../app/EditExpense/EditExpense';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses.fixtures';

let editExpense: any, removeExpense: any, history: any, wrapper: any;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            history={history}
            editExpense={editExpense}
            removeExpense={removeExpense}
            expense={expenses[2]}
        />
    );
});

it('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should handle editExpense', () => {
    const submit: any = wrapper.find('ExpenseForm').prop('onSubmit');
    submit(expenses[2]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

it('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id,
    });
});
