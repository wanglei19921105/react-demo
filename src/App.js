import React from 'react';
import {Layout} from 'antd';
import RouterConfig from './router/router.js';
import './App.css';
import Nav from './views/nav';
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout style={{minHeight: "100vh"}}>
      <Sider><Nav/></Sider>
      <Layout>
        <Header style={{backgroundColor:'#fff'}} >我是头部</Header>
        <Content><RouterConfig/></Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    
  </div>
);

export default App;