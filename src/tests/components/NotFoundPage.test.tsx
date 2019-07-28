import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../app/NotFound/NotFound';

it('should render Expense Dashboard Page correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});
