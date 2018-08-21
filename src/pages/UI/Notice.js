import React from 'react';
import { Card, notification, Button, Icon, Select } from 'antd';

export default class Notice extends React.Component {
  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        '最简单的用法，4.5 秒后自动关闭。This is the content of the notification. This is the content of the notification.'
    });
  };

  openNotificationWithIcon(type) {
    notification[type]({
      message: `${type} Notification Title`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    });
  }

  openNotificationWithCustomIcon = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
    });
  };

  openNotificationWithPlacement = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    });
  };

  render() {
    const { Option } = Select;
    const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

    return (
      <div className="ui-notice">
        <Card title="通知提醒框基本用法" className="card-wrap">
          <Button type="primary" onClick={this.openNotification}>
            Open the notification box
          </Button>
        </Card>

        <Card title="带有图标的通知提醒框" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotificationWithIcon('success')}
          >
            Success
          </Button>
          <Button onClick={() => this.openNotificationWithIcon('info')}>
            Info
          </Button>
          <Button
            type="dashed"
            onClick={() => this.openNotificationWithIcon('warning')}
          >
            Warning
          </Button>
          <Button
            type="danger"
            onClick={() => this.openNotificationWithIcon('error')}
          >
            Error
          </Button>
          <Button onClick={() => this.openNotificationWithIcon('warn')}>
            Warn
          </Button>
        </Card>

        <Card title="自定义图标" className="card-wrap">
          <Button type="primary" onClick={this.openNotificationWithCustomIcon}>
            自定义图标
          </Button>
        </Card>

        <Card title="改变位置" className="card-wrap">
          <Select
            defaultValue="topRight"
            style={{ width: 120, marginRight: 10 }}
            onChange={val => {
              notification.config({
                placement: val
              });
            }}
          >
            {options.map(val => (
              <Option key={val} value={val}>
                {val}
              </Option>
            ))}
          </Select>
          <Button type="primary" onClick={this.openNotificationWithPlacement}>
            Open the notification box
          </Button>
        </Card>
      </div>
    );
  }
}
