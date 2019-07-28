import filtersReducer from '../../reducers/filters';
import moment from 'moment';

it('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

it('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

it('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: moment(),
        endDate: moment(),
        sortBy: 'amount',
    };

    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

it('should set text filter to entered value', () => {
    const text = 'rent';
    const action = {
        type: 'SET_TEXT_FILTER',
        text,
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

it('should set startDate filter to entered value', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate,
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

it('should set endDate filter to entered value', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate,
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});
