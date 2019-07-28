import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../app/ExpenseDashboard/ExpenseDashboard';

it('should render Expense Dashboard Page correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
