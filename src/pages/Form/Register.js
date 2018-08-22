import React from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  InputNumber,
  DatePicker,
  Select,
  TimePicker,
  Switch,
  Upload,
  Icon,
  message
} from 'antd';
import moment from 'moment';
import './Form.less';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FormRegister extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        message.success(`Received values of form: , ${values}`);
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
    const rowObject = {
      minRows: 4,
      maxRows: 6
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 4
        }
      }
    };

    return (
      <div className="form-register">
        <Card title="注册新用户" className="card-wrap">
          <Form onSubmit={this.handleSubmit}>
            <FormItem label="UserName" {...formItemLayout}>
              {getFieldDecorator('userName', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: 'Please input your username!'
                  }
                ]
              })(<Input placeholder="Username" />)}
            </FormItem>
            <FormItem label="Password" {...formItemLayout}>
              {getFieldDecorator('password', {
                initialValue: ''
              })(<Input type="password" placeholder="Password" />)}
            </FormItem>
            <FormItem label="Gender" {...formItemLayout}>
              {getFieldDecorator('gender', {
                initialValue: '1'
              })(
                <RadioGroup>
                  <Radio value="1">Male</Radio>
                  <Radio value="2">Female</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="Age" {...formItemLayout}>
              {getFieldDecorator('age', {
                initialValue: 18
              })(<InputNumber />)}
            </FormItem>
            <FormItem label="State" {...formItemLayout}>
              {getFieldDecorator('state', {
                initialValue: '2'
              })(
                <Select>
                  <Option value="1">学生</Option>
                  <Option value="2">工作</Option>
                  <Option value="3">找工作</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Hobby" {...formItemLayout}>
              {getFieldDecorator('hobby', {
                initialValue: ['1', '3']
              })(
                <Select mode="multiple">
                  <Option value="1">游泳</Option>
                  <Option value="2">打篮球</Option>
                  <Option value="3">踢足球</Option>
                  <Option value="4">跑步</Option>
                  <Option value="5">爬山</Option>
                  <Option value="6">骑行</Option>
                  <Option value="7">桌球</Option>
                  <Option value="8">麦霸</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Wedding" {...formItemLayout}>
              {getFieldDecorator('wedding', {
                valuePropName: 'checked',
                initialValue: true
              })(<Switch />)}
            </FormItem>
            <FormItem label="Birthday" {...formItemLayout}>
              {getFieldDecorator('birthday', {
                initialValue: moment('2018-08-22')
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </FormItem>
            <FormItem label="Address" {...formItemLayout}>
              {getFieldDecorator('address', {
                initialValue: '深圳市南山区'
              })(<TextArea autosize={rowObject} />)}
            </FormItem>
            <FormItem label="Time" {...formItemLayout}>
              {getFieldDecorator('time')(<TimePicker />)}
            </FormItem>
            <FormItem label="Avatar" {...formItemLayout}>
              {getFieldDecorator('avatar')(
                <Upload listType="picture-card" showUploadList={false}>
                  <Icon type="plus" />
                </Upload>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked'
              })(
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(FormRegister);
