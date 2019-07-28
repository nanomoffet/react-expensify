import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses.fixtures';
import ExpenseListItem from '../../app/ExpenseList/ExpenseListItem';

it('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});
