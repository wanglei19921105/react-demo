import Home from '../views/home';
import Page1 from '../views/Page1';
import Page2 from '../views/Page2';
import Page3 from '../views/Page3';
import Login from '../views/login';
import message from '../views/message';
const routes = [
    
    {
        path:"/",
        component:Login,
        exact:true
    },
    {
        path:"/Page1",
        component:Home,
        routes:[
            {
                path:"/Page1/",
                component:Page1
            },
            {
                path:"/Page1/detail",
                component:Page3
            },
            {
                path:"/Page1/message",
                component:message,
            },
            {
                path:"/Page1/Page2",
                component:Page2,
            }
        ]
    },
]
export default routes