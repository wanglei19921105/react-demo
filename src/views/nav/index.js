import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
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
        onClick={this.handleClick}
        style={{ height: "100%" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        // style={styles.primary}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1"><Link to="/Page1">Option 1</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/Page2'>Option 2</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9"><Link to='/'>主页</Link></Menu.Item>
          <Menu.Item key="10"><Link to='/Page1'>Page1</Link></Menu.Item>
          <Menu.Item key="11"><Link to='/Page2'>Page2</Link></Menu.Item>
          <Menu.Item key="12"><Link to='/Page1/detail'>detail</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Radium(Sider)