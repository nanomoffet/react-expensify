import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../app/AddExpense/ExpenseForm';
import expenses from '../fixtures/expenses.fixtures';

it('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

it('should should error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    const error: string = wrapper.state('error');
    expect(error.length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

it('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New Description';
    wrapper
        .find('input')
        .at(0)
        .simulate('change', {
            target: { value },
        });
    const description: string = wrapper.state('description');
    expect(description).toBe(value);
});

it('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New Note';
    wrapper.find('textarea').simulate('change', {
        target: { value },
    });
    const note: string = wrapper.state('note');
    expect(note).toBe(value);
});

it('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '23.5';
    wrapper
        .find('input')
        .at(1)
        .simulate('change', {
            target: { value },
        });
    const amount: string = wrapper.state('amount');
    expect(amount).toBe(value);
});

it('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '212.122';
    wrapper
        .find('input')
        .at(1)
        .simulate('change', {
            target: { value },
        });
    const amount: string = wrapper.state('amount');
    expect(amount).toBe('');
});

it('should call onSubmit prop for valid form submission', () => {
    const expense = expenses[0];
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
        <ExpenseForm expense={expense} onSubmit={onSubmitSpy} />
    );
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    const error: string = wrapper.state('error');
    expect(error).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expense.description,
        amount: expense.amount,
        note: expense.note,
        createdAt: expense.createdAt,
    });
});

it('should set new date on dateChange', () => {
    const now = moment();
    const wrapper: any = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

it('should set calendar focused on onFocusChange', () => {
    const focused = true;
    const wrapper: any = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
        focused,
    });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
