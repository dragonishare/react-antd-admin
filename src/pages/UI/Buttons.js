import React from 'react';
import { Card, Button, Radio } from 'antd';
import './UI.less';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      iconLoading: false,
      size: 'large'
    };
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  HandleIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    return (
      <div className="ui-buttons">
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </Card>
        <Card title="图标按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">搜索</Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group
            value={this.state.size}
            onChange={this.handleSizeChange}
            className="radio-group"
          >
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>
            Primary
          </Button>
          <Button size={this.state.size}>Default</Button>
          <Button type="dashed" size={this.state.size}>
            Dashed
          </Button>
          <Button type="danger" size={this.state.size}>
            Danger
          </Button>
          <Button size={this.state.size} disabled>
            Disabled
          </Button>
        </Card>
        <Card title="按钮组" className="card-wrap">
          <Button.Group>
            <Button type="primary" icon="left">
              Backward
            </Button>
            <Button type="primary" icon="right">
              Forward
            </Button>
          </Button.Group>
        </Card>
        <Card title="加载中状态" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button type="primary" shape="circle" loading={this.state.loading} />
          <Button loading={this.state.loading}>Loading</Button>
          <Button shape="circle" loading={this.state.loading} />
          <Button
            type="primary"
            icon="poweroff"
            loading={this.state.iconLoading}
            onClick={this.HandleIconLoading}
          >
            Click me!
          </Button>
        </Card>
      </div>
    );
  }
}
