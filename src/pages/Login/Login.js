import React from 'react';
import assign from 'lodash/assign';
import { Form, Icon, Input, Button } from 'antd';

import './Login.less';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorTips: false,
      userInfo: {
        email: 'admin' || '',
        password: 'admin' || '',
        isLogin: false
      }
    };
  }

  //处理账号密码输入
  handleChange = e => {
    this.setState({
      userInfo: assign({}, this.state.userInfo, {
        [e.target.name]: e.target.value
      })
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.userInfo.email && this.state.userInfo.password) {
    } else {
      this.setState({
        errorTips: true
      });
    }
  };

  render() {
    return (
      <div className="login">
        <div className="login-inner">
          <div className="login-main">
            <div className="login-header">
              <h3 className="title">后台管理</h3>
            </div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <div className="error-tips">
                {this.state.errorTips
                  ? 'You entered an invalid email address or password.'
                  : ''}
              </div>
              <FormItem>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="text"
                  name="email"
                  className="login-form-input"
                  placeholder="Email address"
                  defaultValue={this.state.userInfo.email}
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  name="password"
                  className="login-form-input"
                  placeholder="Password"
                  defaultValue={this.state.userInfo.password}
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem className="login-form-operation">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  LOGIN
                </Button>
              </FormItem>
              <div className="tips">
                <span>管理员：admin/admin</span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

export default Login;
