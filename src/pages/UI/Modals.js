import React from 'react';
import { Card, Modal, Button } from 'antd';
import './UI.less';

export default class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,

      modal2Text: 'Content of the modal',
      confirmLoading: false
    };
  }

  showModal(type) {
    this.setState({
      [type]: true
    });
  }

  handleOk(type) {
    this.setState({
      [type]: false
    });
  }

  handleCancel(type) {
    this.setState({
      [type]: false
    });
  }

  handleAsyncOk = () => {
    this.setState({
      modal2Text: 'The modal will be closed after two seconds',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        showModal2: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleTipsModal(type) {
    Modal[type]({
      title: `This is a ${type} message`,
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      okText: '知道了'
    });
  }

  showConfirm = () => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };

  showAsyncConfirm = () => {
    Modal.confirm({
      title: 'Do you want to delete these items?',
      content:
        'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {}
    });
  };

  showDeleteConfirm = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };

  render() {
    return (
      <div className="ui-modals">
        <Card title="基本对话框" className="card-wrap">
          <Button type="primary" onClick={() => this.showModal('showModal1')}>
            Open Basic Modal
          </Button>
          <Button type="primary" onClick={() => this.showModal('showModal2')}>
            Open Async Close
          </Button>
          <Button type="primary" onClick={() => this.showModal('showModal3')}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={() => this.showModal('showModal4')}>
            Vertically centered modal
          </Button>
          <Button type="primary" onClick={() => this.showModal('showModal5')}>
            Display a modal dialog at 20px to Top
          </Button>

          <Modal
            title="Basic Modal"
            visible={this.state.showModal1}
            onOk={() => this.handleOk('showModal1')}
            onCancel={() => this.handleCancel('showModal1')}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

          <Modal
            title="Async Close Modal"
            visible={this.state.showModal2}
            onOk={this.handleAsyncOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={() => this.handleCancel('showModal2')}
          >
            <p>{this.state.modal2Text}</p>
          </Modal>

          <Modal
            title="自定义页脚"
            visible={this.state.showModal3}
            okText="显示什么"
            onCancel={() => this.handleCancel('showModal3')}
            footer={[
              <Button
                key="back"
                onClick={() => this.handleCancel('showModal3')}
              >
                Return
              </Button>,
              <Button
                key="submit"
                type="primary"
                onClick={() => this.handleOk('showModal3')}
              >
                Submit
              </Button>
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

          <Modal
            title="Vertically centered modal dialog"
            centered
            visible={this.state.showModal4}
            onOk={() => this.handleOk('showModal4')}
            onCancel={() => this.handleCancel('showModal4')}
          >
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>

          <Modal
            title="20px to Top"
            style={{ top: 20 }}
            visible={this.state.showModal5}
            onOk={() => this.handleOk('showModal5')}
            onCancel={() => this.handleCancel('showModal5')}
          >
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Card>

        <Card title="信息提示对话框" className="card-wrap">
          <Button onClick={() => this.handleTipsModal('info')}>Info</Button>
          <Button
            type="primary"
            onClick={() => this.handleTipsModal('success')}
          >
            Success
          </Button>
          <Button type="danger" onClick={() => this.handleTipsModal('error')}>
            Error
          </Button>
          <Button type="dashed" onClick={() => this.handleTipsModal('warning')}>
            Warning
          </Button>
        </Card>

        <Card title="确认对话框" className="card-wrap">
          <Button onClick={this.showConfirm}>Confirm</Button>
          <Button onClick={this.showAsyncConfirm}>Confirm Async</Button>
          <Button type="danger" onClick={this.showDeleteConfirm}>
            Delete
          </Button>
        </Card>
      </div>
    );
  }
}
