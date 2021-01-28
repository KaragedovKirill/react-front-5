import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import TasksList from '../tasks-list/tasks-list';
import HomePage from '../homepage/homepage';
import ShoppingList from '../shoppinglist/shopping-list';
import FullTask from '../full-task/full-task';
import Button from '../button/button';

import UserContext from '../../contexts/user-context';

import './root.css';

class Root extends React.Component {
  state = { authenticated: false };

  toggleAuthenticated = () => {
    this.setState({ authenticated: !this.state.authenticated });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          authenticated: this.state.authenticated,
          toggleAuthenticated: this.toggleAuthenticated,
        }}
      >
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/taskslist" component={TasksList} />
            <Route path="/taskslist/:taskId" component={FullTask} />
            <Route path="/shoppinglist" component={ShoppingList} />
          </Switch>
          <Button
            onClick={this.toggleAuthenticated}
            label={this.state.authenticated ? 'LOGOUT' : 'LOGIN'}
          />
        </div>
      </UserContext.Provider>
    );
  }
}

export default Root;
