import React from 'react';
import Header from '../../app/Shared/Components/Header';
import { shallow } from 'enzyme';

it('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});
