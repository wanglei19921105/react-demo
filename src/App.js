import React, { Component } from 'react';
import { Layout } from 'antd';
import router from './router/router.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './views/nav';
import Top from './views/header';
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
            router.map((router,index)=>{
                    if(router.exact){
                        
                        return <Route exact key={index} path={router.path}
                            render = {
                                props =>(
                                    <router.component {...props} routes = {router.routes}/>
                                )
                            }
                        />
                        
                    }else{
                        return <Route key={index} path={router.path}
                            render = {
                                props =>(
                                    <router.component {...props} routes = {router.routes} />
                                )
                            }
                        />
                        
                    }
                
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