import React from 'react';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
// 样式示例
import Radium from 'radium';
let styles = {
  base: {
    color: '#fff',
    ':hover': {
      background: '#0074d9'
    }
  },
  primary: {
    background: '#0074D9'
  },
  warning: {
    background: '#FF4136'
  }
};
const { SubMenu } = Menu;

class Sider extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
        <Menu 
        defaultSelectedKeys={['1']} 
        mode="inline"
        onClick={this.handleClick}
        style={{ height: "100%" }}
        mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to='/'>主页</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Page1">
            <Menu.Item key="3"><Link to='/Page1'>Page1</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/Page1/detail'>detail</Link></Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to='/Page1/Page2'>Page2</Link>
          </Menu.Item>
        </Menu>
    );
  }
}

export default Radium(Sider)