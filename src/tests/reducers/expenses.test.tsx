import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses.fixtures';
import moment from 'moment';

it('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

it('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

it('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

it('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Coffee',
        note: 'this is not starbucks',
        amount: 600,
        createdAt: moment(0).add(3, 'days').valueOf,
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense,
    };

    const state = expensesReducer(expenses, action);
    expect(state).toContain(expense);
});

it('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount: 500,
        },
    };
    const state = expensesReducer(expenses, action);

    expect(state[0].amount).toEqual(500);
});

it("should not edit expense when id doesn't exist", () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 4,
        updates: {
            amount: 500,
        },
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});
