import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import EditExspensePage from './../components/EditExpensePage';
import Header from './../components/Header';
import AddExpensePage from './../components/AddExpensePage';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';

const AppRouter = () => (
  <BrowserRouter>
  <div>
  <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit/:id" component={EditExspensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
</BrowserRouter>
);

export default AppRouter;