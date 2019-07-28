import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from '../app/ExpenseDashboard/ExpenseDashboard';
import AddExpensePage from '../app/AddExpense/AddExpense';
import ExpenseHelpPage from '../app/ExpenseHelp/ExpenseHelp';
import NotFoundPage from '../app/NotFound/NotFound';
import Header from '../app/Shared/Components/Header';
import EditExpensePage from '../app/EditExpense/EditExpense';

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/help' component={ExpenseHelpPage} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
