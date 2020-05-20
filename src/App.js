import React from 'react';
import {Layout} from 'antd';
import router from './router/router.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './views/nav';
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout style={{minHeight: "100vh"}}>
      <Sider>
        <Nav/>
      </Sider>
      <Layout>
        <Header style={{backgroundColor:'#fff'}} >我是头部</Header>
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
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    
  </div>
);

export default App;