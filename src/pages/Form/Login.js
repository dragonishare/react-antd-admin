import React from 'react';
import { Card, Form, Input, Button, Icon, message, Checkbox } from 'antd';
import './Form.less';

const FormItem = Form.Item;
class FormLogin extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    //获取form表单中的字段值，可以通过getFieldsValue()方法，validateFields()方法校验表单中的字段值
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        message.success(
          `当前输入用户名: ${userInfo.userName}, 密码: ${
            userInfo.password
          };直接通过values获取的值: ${values.userName}/${values.password}`
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="form-login" onSubmit={this.handleSubmit}>
        <Card title="水平登录栏" className="card-wrap">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="Username" />
            </FormItem>
            <FormItem>
              <Input placeholder="Password" type="password" />
            </FormItem>
            <FormItem>
              <Button type="primary">Log in</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="普通登录框" className="card-wrap">
          <Form className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                initialValue: '',
                rules: [
                  { required: true, message: 'Please input your username!' },
                  {
                    min: 5,
                    max: 8,
                    message: 'Length is not in range'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(FormLogin);
