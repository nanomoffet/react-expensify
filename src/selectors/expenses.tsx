// Get visible expenses
import moment from 'moment';

const getVisibleExpenses = (
    expenses: any[],
    {
        text,
        sortBy,
        startDate,
        endDate,
    }: { text: any; sortBy: any; startDate: any; endDate: any }
) => {
    return expenses
        .filter(expense => {
            const createdAtMoment = moment(expense.createdAt);
            const startDateMatch = startDate
                ? startDate.isSameOrBefore(createdAtMoment, 'day')
                : true;
            const endDateMatch = endDate
                ? endDate.isSameOrAfter(createdAtMoment, 'day')
                : true;
            const textMatch = expense.description
                .toLowerCase()
                .includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a: any, b: any) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else {
                return a.amount < b.amount ? 1 : -1;
            }
        });
};

export default getVisibleExpenses;
