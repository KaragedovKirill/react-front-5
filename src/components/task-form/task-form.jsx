import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import './task-form.scss';
import Locale from '../../locale';
import UserContext from '../../contexts/user-context';

class TaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  static contextType = UserContext;

  state = { title: '' };

  handleInput = (event) => {
    this.setState({ title: event.target.value });
  };

  addTask = () => {
    const { addTask } = this.props;
    const { title } = this.state;

    addTask(title);
  };

  render() {
    const { title } = this.state;
    const locale = Locale.taskForm;

    return (
      <div className="task-form">
        <input type="text" value={title} onChange={this.handleInput} />
        <Button
          onClick={this.addTask}
          label={locale.addButtonLabel}
          disabled={!this.context.authenticated}
        />
        <Button
            onClick={this.context.toggleAuthenticated}
            label={this.context.authenticated ? 'LOGOUT' : 'LOGIN'}
          />
      </div>
    );
  }
}

export default TaskForm;
