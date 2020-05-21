import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from './router/router.js';
// import { Provider} from 'mobx-react'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

ReactDOM.render(
  // <BrowserRouter>
  // <LocaleProvider locale={zh_CN}>
  //   {/* <Provider {...store}> */}
  //     <App/>
  //   {/* </Provider> */}
  // </LocaleProvider>
  // </BrowserRouter>,
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Router>
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
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
