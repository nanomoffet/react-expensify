import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../app/ExpenseList/ExpenseList';
import expenses from '../fixtures/expenses.fixtures';

it('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
