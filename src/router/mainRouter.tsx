import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import DataFetching from "../Pages/DataFetching";
import StateManagement from "../Pages/StateManagement";
import Todo from "../Pages/Todo";

export const mainRouter = createBrowserRouter([{
    path: "/",
    element:<Layout/>,
    children:[
        {
            index:true,
            element:<DataFetching/>
        },
        {
            path:"/statemanagement",
            element:<StateManagement/>
        },
        {
            path:"/todo",
            element:<Todo/>
        },
     
    ]
}]);