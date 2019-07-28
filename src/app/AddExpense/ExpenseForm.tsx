import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense
                ? (props.expense.amount / 100).toString()
                : '',
            createdAt: props.expense
                ? moment(props.expense.createdAt)
                : moment(),
            calendarFocused: false,
            error: '',
        };
    }
    onDescriptionChange = (e: any) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e: any) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e: any) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt: any) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }: { focused: any }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e: any) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide description and amount.',
            }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        value={this.state.description}
                        placeholder='Description'
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input
                        type='number'
                        value={this.state.amount}
                        placeholder='Amount'
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        id='date-picker'
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                        {' '}
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
