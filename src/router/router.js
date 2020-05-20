import Page1 from '../views/Page1';
import Page2 from '../views/Page2';
import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from "history";
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    {/* <Route path='/' exact render={()=>(
                        <Redirect to='/Page1'/>
                    )}/> */}
                    <Route path='/Page1' component={Page1}/>
                    <Route path='/Page2' component={Page2}/>
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;