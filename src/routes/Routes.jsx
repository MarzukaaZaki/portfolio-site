import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        loader: ()=> fetch('http://localhost:5000/projects')
    }
])

export default router;