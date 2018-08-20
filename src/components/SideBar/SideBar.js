import React from 'react';
import { Layout, Menu } from 'antd';
import MenuConfig from '../../common/Menu';
import Logo from '../../assets/logo.svg';
import './SideBar.less';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;
export default class SideBar extends React.Component {
  state = {
    current: '/home'
  };

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode
    });
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  renderMenu = items => {
    return items.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={item.key}>
          <span className="nav-text">{item.title}</span>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <Sider className="sidebar">
        <div className="logo">
          <img alt="logo-img" className="logo-img" src={Logo} />
          <span className="title">后台管理</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/home']}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          onClick={this.handleClick}
        >
          {this.state.menuTreeNode}
        </Menu>
      </Sider>
    );
  }
}
