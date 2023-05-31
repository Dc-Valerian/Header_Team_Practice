import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import DataFetching from "../Pages/DataFetching";

export const mainRouter = createBrowserRouter([{
    path: "/",
    element:<Layout/>,
    children:[
        {
            index:true,
            element:<DataFetching/>
        }
    ]
}]);