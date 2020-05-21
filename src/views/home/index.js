import React, { Component } from 'react';
import { Layout } from 'antd';
import router from '../../router/router.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../../App.css';
import Nav from '../nav';
import Top from '../header';
const { Header, Footer, Sider, Content } = Layout;

class SiderDemo extends Component {
  state = {
    collapsed: false,
  };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    
    render() {
    console.log(this.props);
    return (
      <Layout style={{minHeight: "100vh"}}>
        <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Nav/>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Top toggle={this.toggle.bind(this)} collapsed={this.state.collapsed}/>
          </Header>
          <Content>
            {
                this.props.routes.map((item,index)=>{
                    
                    return <Route key={index} exact path={item.path} component={item.component}></Route>
                    
                })
            }
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo