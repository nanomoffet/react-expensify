import React from 'react';
import { ExpenseListFilters } from '../../app/ExpenseList/ExpenseListFilters';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses.fixtures';
import { filters, altFilters } from '../fixtures/filters.fixtures';
import moment from 'moment';

let setTextFilter: any,
    sortByDate: any,
    sortByAmount: any,
    setStartDate: any,
    setEndDate: any,
    wrapper: any;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
        />
    );
});

it('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

it('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: {
            value,
        },
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

it('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', {
        target: { value },
    });

    expect(sortByDate).toHaveBeenCalled();
});

it('should sort by amount', () => {
    const value = 'amount';
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', {
        target: { value },
    });

    expect(sortByAmount).toHaveBeenCalled();
});

it('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate,
        endDate,
    });

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

it('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(
        calendarFocused
    );

    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
