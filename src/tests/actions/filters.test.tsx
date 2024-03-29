import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate,
} from '../../actions/filters';
import moment from 'moment';

it('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),
    });
});

it('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0),
    });
});

it('should generate set text filter action object with provided text', () => {
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent',
    });
});

it('should generate set text filter action object with default text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});

it('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});

it('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});
