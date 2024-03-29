import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../../selectors/expenses';

export const ExpenseList = (props: any) => (
    <div>
        {props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense: any) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
            })
        )}
    </div>
);

const mapStateToProps = (state: any) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);
