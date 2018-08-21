import React from 'react';
import { Card, Button, message } from 'antd';
import './UI.less';

export default class Messages extends React.Component {
  showMessage(type) {
    message[type](`${type} This is a normal message.`);
  }

  render() {
    return (
      <div className="ui-messages">
        <Card title="全局提示" className="card-wrap">
          <Button type="primary" onClick={() => this.showMessage('info')}>
            Display normal message
          </Button>
          <Button onClick={() => this.showMessage('success')}>Success</Button>
          <Button type="danger" onClick={() => this.showMessage('error')}>
            Error
          </Button>
          <Button type="dashed" onClick={() => this.showMessage('warning')}>
            Warning
          </Button>
          <Button onClick={() => this.showMessage('loading')}>Loading</Button>
        </Card>
      </div>
    );
  }
}
