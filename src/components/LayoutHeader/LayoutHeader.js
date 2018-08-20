import React from 'react';
import { Layout, Icon, Breadcrumb } from 'antd';
import './LayoutHeader.less';
const { Header } = Layout;

class LayoutHeader extends React.Component {
  render() {
    return (
      <Header className="layout-header">
        <Breadcrumb className="layout-header-left">
          <Breadcrumb.Item>
            <Icon type="home" />
            <span>Home</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="layout-header-right">
          <div className="nickname">
            <span>欢迎，admin</span>
          </div>
          <div className="logout">
            <Icon type="logout" /> 注销
          </div>
        </div>
      </Header>
    );
  }
}

export default LayoutHeader;
