import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import 'react-dates/initialize';

const ExpenseDashboardPage = () => (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;