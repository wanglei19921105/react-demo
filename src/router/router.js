import Page1 from '../views/Page1';
import Page2 from '../views/Page2';
import Page3 from '../views/Page3';
const routes = [
    
    {
        path:"/",
        component:Page2,
        exact:true
    },
    {
        path:"/Page1",
        component:Page1,
        routes:[
            // {
            //     path:"/Page1/",
            //     component:Page2
            // },
            {
                path:"/Page1/detail",
                component:Page3
            }
        ]
    },
    {
        path:"/Page2",
        component:Page2,
    }
]
export default routes