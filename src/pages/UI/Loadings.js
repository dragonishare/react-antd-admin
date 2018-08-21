import React from 'react';
import { Card, Spin, Icon, Alert } from 'antd';

export default class Loadings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} />;
    return (
      <div className="ui-loadings">
        <Card title="Spin基本用法" className="card-wrap">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />

          <Spin indicator={antIcon} />
          <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} />} />
        </Card>

        <Card title="卡片加载中" className="card-wrap">
          <Spin spinning={this.state.loading}>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Card>

        <Card title="自定义描述文案" className="card-wrap">
          <Spin tip="Loading..." spinning={this.state.loading}>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Card>

        <Card title="自定义指示符" className="card-wrap">
          <Spin indicator={antIcon}>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Card>

        <Card title="自定义指示符和描述文案" className="card-wrap">
          <Spin indicator={antIcon} tip="加载中...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}
