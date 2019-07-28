import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'abc123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123',
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123456', { note: 'new note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456',
        updates: {
            note: 'new note',
        },
    });
});

test('should setup add expense object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: "This was last month's rent.",
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String),
        },
    });
});

test('should setup add expense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String),
        },
    });
});
