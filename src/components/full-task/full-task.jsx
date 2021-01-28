import React from 'react';

import NiceHeader from '../nice-header/nice-header';
import tomorrowRequest from '../../api/tomorrow';

class FullTask extends React.Component {
  state = { title: '', completed: '' };

  async componentDidMount() {
    const { data } = await tomorrowRequest.get(
      `/tasks/${this.props.match.params.taskId}`
    );

    console.log(data);

    this.setState({
      title: data.data.title,
      completed: String(data.data.completed),
    });
  }

  render() {
    return (
      <div className="full-task">
        <NiceHeader>
          <h1>{this.state.title}</h1>
        </NiceHeader>
        <h1>{this.state.completed}</h1>
      </div>
    );
  }
}

export default FullTask;
