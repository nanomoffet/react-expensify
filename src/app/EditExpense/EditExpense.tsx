import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../AddExpense/ExpenseForm';
import { editExpense, removeExpense } from '../../actions/expenses';

interface props {
    editExpense: any;
    removeExpense: any;
    history: any;
    expense: any;
}

export class EditExpensePage extends Component<props> {
    onSubmit = (expense: any) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <button onClick={this.onRemove}>Remove</button>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    editExpense: (id: any, expense: any) => dispatch(editExpense(id, expense)),
    removeExpense: (expense: any) => dispatch(removeExpense(expense)),
});

const mapStateToProps = (state: any, props: any) => {
    return {
        expense: state.expenses.find(
            (expense: any) => expense.id === props.match.params.id
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditExpensePage);
