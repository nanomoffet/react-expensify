import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate,
} from '../../actions/filters';
import { DateRangePicker } from 'react-dates';
import { Moment } from 'moment';

export class ExpenseListFilters extends Component<any> {
    state = {
        calendarFocused: null,
    };
    onDatesChange = ({
        startDate,
        endDate,
    }: {
        startDate: any;
        endDate: any;
    }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused: any) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e: any) => {
        this.props.setTextFilter(e.target.value);
    };

    onSelectChange = (e: any) => {
        e.target.value === 'date'
            ? this.props.sortByDate()
            : this.props.sortByAmount();
    };

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSelectChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId='start-date'
                    endDate={this.props.filters.endDate}
                    endDateId='end-date'
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    focusedInput={this.state.calendarFocused}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    filters: state.filters,
});

const mapDispatchToProps = (dispatch: any) => ({
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setTextFilter: (text: any) => dispatch(setTextFilter(text)),
    setStartDate: (startDate: any) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate: any) => dispatch(setEndDate(endDate)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpenseListFilters);
