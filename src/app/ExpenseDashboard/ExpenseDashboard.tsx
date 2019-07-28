import React from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseListFilters from '../ExpenseList/ExpenseListFilters';

const ExpenseDashboardPage = (props: any) => (
    <div>
        <ExpenseListFilters />
        <ExpenseList {...props} />
    </div>
);

export default ExpenseDashboardPage;
