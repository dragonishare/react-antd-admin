import React from 'react';
import { Layout } from 'antd';
import SideBar from '../../components/SideBar/SideBar';
import LayoutHeader from '../../components/LayoutHeader/LayoutHeader';
import './Admin.less';

const { Content, Footer } = Layout;

export default class Admin extends React.Component {
  render() {
    return (
      <Layout className="admin-layout">
        <SideBar />
        <Layout className="layout-main">
          <LayoutHeader />
          <Content className="layout-main-content">
            {this.props.children}
          </Content>
          <Footer className="layout-main-footer">
            react-antd-admin ©2018 Created by dragonishare
            （推荐使用谷歌浏览器，可以获得更佳操作页面体验）
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
