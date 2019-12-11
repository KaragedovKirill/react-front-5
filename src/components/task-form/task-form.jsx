import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import './task-form.scss';
import Locale from '../../locale';

class TaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  state = { title: '' };

  handleInput = event => {
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
      <div className='task-form'>
        <input type='text' value={title} onChange={this.handleInput} />
        <Button onClick={this.addTask} label={locale.addButtonLabel} />
      </div>
    );
  }
}

export default TaskForm;