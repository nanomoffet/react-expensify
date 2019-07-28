import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../../actions/expenses';
import { connect } from 'react-redux';

interface props {
    addExpense: any;
    history: any;
}

export class AddExpensePage extends Component<props> {
    onSubmit = (expense: any) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    addExpense: (expense: any) => dispatch(addExpense(expense)),
});
export default connect()(AddExpensePage);
